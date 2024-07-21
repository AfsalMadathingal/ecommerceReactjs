const tryCatch = require("../util/tryCatch");
const productModel = require("../models/productModel");
const upload = require("../middleware/upload");
const fs = require("fs");
const path = require("path");
module.exports = {
  getAllProducts: tryCatch(async (req, res) => {
    const products = await productModel.find();
    return res.status(200).json(products);
  }),

  getProduct: tryCatch(async (req, res) => {
    const { id } = req.params;
    const product = await productModel.findById(id);
    if (!product)
      return res
        .status(404)
        .json({ message: "Product not found", success: false });
    return res.status(200).json(product);
  }),

  createProduct: tryCatch(async (req, res) => {
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/images/${
      req.file.filename
    }`;
    req.body.image = imageUrl;
    const product = new productModel(req.body);
    await product.save();
    return res.status(201).json(product);
  }),

  updateProduct: tryCatch(async (req, res) => {
    const { id } = req.params;

    if (req.file) {
      req.body.image = `${req.protocol}://${req.get("host")}/uploads/images/${
        req.file.filename
      }`;
      const product = await productModel.findById(id);
      if (product) {
        if (product.image) {
          const imagePath = new URL(product.image).pathname.slice(1);
          const absoluteImagePath = path.resolve(imagePath);
          console.log(absoluteImagePath);
          fs.unlink(absoluteImagePath, (err) => {
            if (err) {
              console.error("Failed to delete image:", err);
            }
          });
        }
      }
    }
    const product = await productModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(product);
  }),

  deleteProduct: tryCatch(async (req, res) => {
    const { id } = req.params;
    const product = await productModel.findByIdAndDelete(id);
    if (product) {
      if (product.image) {
        const imagePath = new URL(product.image).pathname.slice(1);
        const absoluteImagePath = path.resolve(imagePath);
        console.log(absoluteImagePath);
        fs.unlink(absoluteImagePath, (err) => {
          if (err) {
            console.error("Failed to delete image:", err);
          }
        });
      }
    }
    return res.status(204).json({ message: "Product deleted", success: true });
  }),
};
