import express from 'express';
const router = express.Router();

import {
    addOrdersItems,
    getOrderById,
    updateOrderToPaid,
    getMyOrders,
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddeware.js';

router.post('/', protect, addOrdersItems);
router.get('/myorders', protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router;
