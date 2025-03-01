import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema({
    company: {
        name: { type: String, required: true, trim: true },
        mobileNo: { type: String, required: true, match: /^\d{10}$/ },
        email: { type: String, required: true, match: /.+@.+\..+/ },
        gstin: { type: String, required: true },
        address: { type: String, required: true, trim: true }
    },
    invoiceToDetails: {
        paymentDate: { type: Date, required: true },
        name: { type: String, required: true, trim: true },
        mobileNo: { type: String, required: true, match: /^\d{10}$/ },
        emailId: { type: String, required: true, match: /.+@.+\..+/ },
        pincode: { type: String, required: true, match: /^\d{6}$/ },
        city: { type: String, required: true, trim: true },
        state: { type: String, required: true, trim: true },
        address: { type: String, required: true, trim: true }
    },
    transactionDetails: [
        {
            product: { type: String, required: true, trim: true },
            rate: { type: Number, required: true, min: 0 },
            quantity: { type: Number, required: true, min: 1 },
            discount: { type: Number, required: true, min: 0, max: 100 },
            total: { type: Number, required: true, min: 0 }
        }
    ],
    createdBy: { type: String, required: true, trim: true }
}, { timestamps: true });

const invoicesCollection = mongoose.model("Invoice", InvoiceSchema);

export default invoicesCollection;
