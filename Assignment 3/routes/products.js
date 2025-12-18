const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /products?page=1&limit=10&category=cat&minPrice=0&maxPrice=100
router.get('/', async (req, res) => {
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.max(1, parseInt(req.query.limit) || 10);
  const { category, minPrice, maxPrice } = req.query;

  const filter = {};
  if (category) filter.category = category;
  if (minPrice || maxPrice) {
    filter.price = {};
    if (minPrice) filter.price.$gte = Number(minPrice);
    if (maxPrice) filter.price.$lte = Number(maxPrice);
  }

  const [total, products, categories] = await Promise.all([
    Product.countDocuments(filter),
    Product.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit),
    Product.distinct('category')
  ]);

  res.render('products', {
    title: 'Products',
    products,
    currentPage: page,
    totalPages: Math.max(1, Math.ceil(total / limit)),
    limit,
    filters: { category, minPrice, maxPrice },
    categories
  });
});

module.exports = router;
