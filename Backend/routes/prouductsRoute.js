const router  = require("express").Router();
const productController = require("../controller/productController");
const productModel = require("../models/productModel");
const upload = require('../middleware/upload');

router.get('/getallproducts',productController.getAllProducts)

router.get('/getproduct/:id',productController.getProduct)

router.post('/createproduct',upload.single('image'),productController.createProduct)

module.exports = router