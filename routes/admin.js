const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminController');

router.get('/', adminCtrl.dashboard);

// Product routes
router.get('/products', adminCtrl.listProducts);
router.get('/products/add', adminCtrl.getAddProduct);
router.post('/products/add', adminCtrl.postAddProduct);
router.get('/products/:id/edit', adminCtrl.getEditProduct);
router.post('/products/:id/edit', adminCtrl.postEditProduct);
router.post('/products/:id/delete', adminCtrl.deleteProduct);

module.exports = router;
