import express from 'express';
import { getSales } from '../controllers/sales.js';



const router = express.Router();

// Example route for sales


router.get("/sales", getSales);



export default router;