const Product = require('../models/product');

exports.dashboard = async (req, res) => {
  try {
    const count = await Product.countDocuments();
    res.render('admin/dashboard', { title: 'Admin Dashboard', productCount: count, layout: 'admin/layout' });
  } catch (err) { res.status(500).send(err.message); }
};

exports.listProducts = async (req, res, next) => {
  try {
    const [products, count] = await Promise.all([Product.find().lean(), Product.countDocuments()]);
    res.render('admin/products/list', { title: 'Products', products, productCount: count, layout: 'admin/layout' });
  } catch (err) { next(err); }
};

exports.getAddProduct = (req, res) => {
  res.render('admin/products/form', { title: 'Add Product', product: {}, layout: 'admin/layout' });
};

exports.postAddProduct = async (req, res, next) => {
  try {
    const { name, price, description } = req.body;
    await Product.create({ name, price, description });
    res.redirect('/admin/products');
  } catch (err) { next(err); }
};

exports.getEditProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).lean();
    if (!product) return res.status(404).send('Not found');
    res.render('admin/products/form', { title: 'Edit Product', product, layout: 'admin/layout' });
  } catch (err) { next(err); }
};

exports.postEditProduct = async (req, res, next) => {
  try {
    const { name, price, description } = req.body;
    await Product.findByIdAndUpdate(req.params.id, { name, price, description }, { runValidators: true });
    res.redirect('/admin/products');
  } catch (err) { next(err); }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/admin/products');
  } catch (err) { next(err); }
};
