import invoicesCollection from "./models.js"

export const getAllInvoices = async(req, res) => {
    try {
        const allInvoices = await invoicesCollection.find();
        res.status(200).send({allInvoices});
    }
    catch(err) {
        console.log(err);
        res.status(500).send('Error while fetching all invoices');
    }
};


export const createInvoice = async(req, res) => {
    try {
        const { company, invoiceToDetails, transactionDetails, createdBy } = req.body;

        if (!["USER", "PANEL"].includes(createdBy)) {
            return res.status(400).json({ error: "createdBy must be either 'USER' or 'PANEL'" });
        }

        const newInvoice = new invoicesCollection({
            company,
            invoiceToDetails,
            transactionDetails,
            createdBy
        });

        await newInvoice.save();
        res.status(201).json({ message: "Invoice created successfully", invoice: newInvoice });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateInvoiceById = async(req, res) => {
    try {
        if (req.body.createdBy && !["USER", "PANEL"].includes(req.body.createdBy)) {
            return res.status(400).json({ error: "createdBy must be either 'USER' or 'PANEL'" });
        }

        const updatedInvoice = await invoicesCollection.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        );

        if (!updatedInvoice) {
            return res.status(404).json({ error: "Invoice not found" });
        }

        res.status(200).json({ message: "Invoice updated successfully", invoice: updatedInvoice });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
