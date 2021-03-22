import express from 'express';
const router = express.Router();

import {
    getProducts,
    getProductById,
} from '../controllers/productController.js';

//@desc Fetch all Products
//@route GET /api/products
//@acess Public
router.route('/').get(getProducts);

//@desc Fetch single Products
//@route GET /api/products/:id
//@acess Public
router.route('/:id').get(getProductById);

export default router;
