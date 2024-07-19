const router  = require("express").Router();
const productController = require("../controller/productController");
const productModel = require("../models/productModel");
const upload = require('../middleware/upload');
const auth = require('../middleware/auth');

router.get('/',productController.getAllProducts)

router.get('/:id',productController.getProduct)

router.post('/product',auth.verifyAdminToken,upload.single('image'),productController.createProduct)

router.delete('/:id',auth.verifyAdminToken,productController.deleteProduct)

router.put('/:id',auth.verifyAdminToken,upload.single('image'),productController.updateProduct)

module.exports = router