import express from 'express';
import { getAdmin } from '../controllers/management.js';

const router = express.Router();

// Example route for management


router.get("/admin", getAdmin)


export default router;