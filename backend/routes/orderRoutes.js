import express from 'express';
const router = express.Router();

import { addOrdersItems, getOrderById, updateOrderToPaid } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddeware.js';

router.post('/', protect, addOrdersItems);
router.route('/:id').get(protect, getOrderById)
router.route('/:id/paid').put(protect, updateOrderToPaid)

export default router;
