import express from 'express';
const router = express.Router();

import { addOrdersItems } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddeware.js';

router.post('/', protect, addOrdersItems);

export default router;
