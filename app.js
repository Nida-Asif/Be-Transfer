
// const express = require('express');
// const path = require('path');
// const expressLayouts = require('express-ejs-layouts');
// const mongoose = require('mongoose');
// require('dotenv').config(); // Load .env file

// const app = express();

// // 🔹 Test if dotenv loaded correctly
// console.log("Mongo URI:", process.env.MONGO_URI); // should print your URI

// // Middleware
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use(expressLayouts);
// app.set('layout', 'layouts/layout');

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({ extended: true }));

// // 🔹 MongoDB connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected successfully ✅'))
//   .catch(err => console.error('MongoDB connection error ❌:', err));
//   app.use(express.static('public'));



// // routes for converted pages
// app.get('/', (req, res) => res.render('index', { title: 'Home' }));
// app.get('/checkout', (req, res) => res.render('checkout', { title: 'Checkout' }));
// app.get('/cv', (req, res) => res.render('cv', { title: 'CV' }));
// app.get('/success', (req, res) => res.render('success', { title: 'Success' }));
// app.get('/transfers', (req, res) => res.render('transfers', { title: 'Transfers' }));

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, '0.0.0.0', () => console.log('Server started on http://localhost:' + PORT + '/products'));
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// ✅ ADD THIS

const productsRoutes = require('./routes/products');

// Middleware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully ✅'))
  .catch(err => console.error('MongoDB connection error ❌:', err));

//  ADD THIS (BEFORE app.get routes)

app.use('/products', productsRoutes);

// Existing page routes (KEEP AS IS)
app.get('/', (req, res) => res.render('index', { title: 'Home' }));
app.get('/checkout', (req, res) => res.render('checkout', { title: 'Checkout' }));
app.get('/cv', (req, res) => res.render('cv', { title: 'CV' }));
app.get('/success', (req, res) => res.render('success', { title: 'Success' }));
app.get('/transfers', (req, res) => res.render('transfers', { title: 'Transfers' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log('Server started on http://localhost:' + PORT + '/products'));


app.get('/ping', (req, res) => res.send('pong'));
