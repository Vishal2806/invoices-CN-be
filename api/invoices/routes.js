import {Router} from "express";
import { createInvoice, getAllInvoices, updateInvoiceById } from "./controllers.js";

const router = Router();

router.get('/all', getAllInvoices);
router.post('/add', createInvoice);
router.patch('/:id', updateInvoiceById);

export default router;
