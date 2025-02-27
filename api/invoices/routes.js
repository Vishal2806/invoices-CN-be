import {Router} from "express";
import { createInvoice, getAllInvoices, updateInvoiceById } from "./controllers.js";

const invoiceRouter = Router();

invoiceRouter.get('/all', getAllInvoices);
invoiceRouter.post('/add', createInvoice);
invoiceRouter.patch('/:id', updateInvoiceById);

export default invoiceRouter;
