import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//@desc Fetch all Products
//@route GET /api/products
//@acess Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

//@desc Fetch single Products
//@route GET /api/products/:id
//@acess Public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

//@desc Delete single Products
//@route DEL /api/products/:id
//@acess Privat Admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        await product.remove();
        res.json({ message: 'Product removed' });
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

export { getProducts, getProductById, deleteProduct };
