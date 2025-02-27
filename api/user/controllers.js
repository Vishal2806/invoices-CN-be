import UserCollection from "./models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const createNewUser = async(req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await UserCollection.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserCollection({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const loginUser = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserCollection.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user._id, email: user.email }, "apoeuhtjngdfbnflewrh1poi31jt2", { expiresIn: "1h" });
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}