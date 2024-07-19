const tryCatch = require("../util/tryCatch");
const productModel = require("../models/productModel");
const upload = require('../middleware/upload');

module.exports ={

    getAllProducts: tryCatch(async (req, res) => {
        const products = await productModel.find();
        return res.status(200).json(products);
    }),

    getProduct: tryCatch(async (req, res) => {
        const {id} = req.params;
        const product = await productModel.findById(id);
        return res.status(200).json(product);
    }),

    createProduct:  tryCatch(async (req, res) => {
        
        const imageUrl = `${req.protocol}://${req.get('host')}/uploads/images/${req.file.filename}`;
        req.body.image = imageUrl;
        const product = new productModel(req.body);
        await product.save();
        return res.status(201).json(product);
    }),

    updateProduct: tryCatch(async (req, res) => {
        const {id} = req.params;
        const product = await productModel.findByIdAndUpdate(id, req.body, {new: true});
        return res.status(200).json(product);
    }),
    
    deleteProduct: tryCatch(async (req, res) => {
        const {id} = req.params;
        await productModel.findByIdAndDelete(id);    
        return res.status(204).json({message: "Product deleted",success: true});
    }),

}