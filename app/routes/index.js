import express from 'express';
import {getProduct,getProductById,saveProduct,updateProduct,deleteProduct


} from '../controllers/productcontroller.js'

// express router
const router = express.Router();
// Route get All Products
router.get('/', getProduct);
// Route get single Product
router.get('/:id', getProductById );
// Route CREATE Product
router.post('/', saveProduct);
// Route UPDATE Product
router.patch('/:id', updateProduct);
// Route DELETE Product
router.delete('/:id', deleteProduct);
 

export default router;