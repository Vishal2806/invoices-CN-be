import {Router} from "express";
import { createNewUser, loginUser } from "./controllers.js";

const authRouter = Router();

authRouter.post('/login', loginUser);
authRouter.post('/create', createNewUser);

export default authRouter;
