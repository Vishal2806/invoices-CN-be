import {Router} from "express";
import { createInvoice, getAllInvoices, updateInvoiceById ,getInvoiceById} from "./controllers.js";

const invoiceRouter = Router();

invoiceRouter.get('/all', getAllInvoices);
invoiceRouter.post('/add', createInvoice);
invoiceRouter.get('/:id', getInvoiceById);
invoiceRouter.patch('/:id', updateInvoiceById);


export default invoiceRouter;
