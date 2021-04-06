import express from 'express';
const router = express.Router();

import { addOrdersItems, getOrderById } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddeware.js';

router.post('/', protect, addOrdersItems);
router.route('/:id').get(protect, getOrderById)

export default router;
