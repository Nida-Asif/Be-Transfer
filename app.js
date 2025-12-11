const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// routes for converted pages
app.get('/', (req, res) => res.render('index', { title: 'Home' }));
app.get('/checkout', (req, res) => res.render('checkout', { title: 'Checkout' }));
app.get('/cv', (req, res) => res.render('cv', { title: 'CV' }));
app.get('/success', (req, res) => res.render('success', { title: 'Success' }));
app.get('/transfers', (req, res) => res.render('transfers', { title: 'Transfers' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server started on http://localhost:'+PORT));
