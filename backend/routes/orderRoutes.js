import express from 'express';
const router = express.Router();

import {
    addOrdersItems,
    getOrderById,
    updateOrderToPaid,
    getMyOrders,
    getOrders,
} from '../controllers/orderController.js';
import { admin, protect } from '../middleware/authMiddeware.js';

router.route('/').post(protect, addOrdersItems).get(protect, admin, getOrders);
router.get('/myorders', protect, getMyOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);

export default router;
