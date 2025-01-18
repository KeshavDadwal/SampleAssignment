const express = require('express');
const Product = require('../models/product');
const authMiddleware = require('../middleware/authMiddleware'); 

const router = express.Router();

router.get('/products', authMiddleware, async (req, res) => {
  try {

    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving products', error: err.message });
  }
}); 

module.exports = router;
