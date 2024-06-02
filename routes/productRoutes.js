import express from 'express'
import { isAdmin, requireSignIn } from './../middlewares/authMiddleware.js';
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, relatedProductController, searchProductController, updateProductController } from '../controllers/productController.js';
import formidable from 'express-formidable'

const router=express.Router()

router.post('/create-product',requireSignIn, isAdmin, formidable(), createProductController)
router.put('/update-product/:pid',requireSignIn, isAdmin, formidable(), updateProductController)

router.get('/get-product', getProductController)
router.get('/get-product/:slug', getSingleProductController)
router.get('/product-photo/:pid', productPhotoController)
router.delete('/delete-product/:pid', deleteProductController)

router.post('/product-filters', productFiltersController)
router.get('/product-count', productCountController)
router.get('/product-list/:page', productListController)

router.get('/search/:keyword',searchProductController)

router.get('/related-product/:pid/:cid', relatedProductController)

//category wise product
router.get('/product-category/:slug',productCategoryController)

//payment route
router.get('/braintree/token', braintreeTokenController)

router.post('/braintree/payment', requireSignIn, brainTreePaymentController)

export default router;