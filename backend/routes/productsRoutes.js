import express from 'express';
import { getAllProduct,getAProductById,getProductByName } from '../controller/productsControllers.js';

const router = express.Router();
router.route('/byname/:name').get(getProductByName);
router.route('/').get(getAllProduct)
router.route('/:id').get(getAProductById);

export default router;