import products from '../data/products.js';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

export const getAllProduct = asyncHandler(async (req,res)=> {
    const products = await Product.find({}).populate('user');
    if(!products){
        res.status(500);
        throw new Error('internal server error');
    }

    res.status(200).json(products);
}) 

export const getAProductById = asyncHandler(async (req,res) => {
    const product = await Product.findById(req.params.id);
    if(!product){
        res.status(404);
        throw new Error(`id not found`);
    }
   
    res.status(200).json(product);
})

export const getProductByName = asyncHandler(async (req,res) => {
    const products = await Product.find({name:req.params.name});
    if(!products){
        res.status(400);
        throw new Error(`name not found`);
    }

    res.status(200).json(products);
})
