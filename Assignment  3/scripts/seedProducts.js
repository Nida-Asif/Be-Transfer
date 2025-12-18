const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('../models/Product');

const sample = [
  { name: 'Checking Account Bronze', price: 0, category: 'Accounts', description: 'Basic checking account', image: '' },
  { name: 'Savings Plus', price: 0, category: 'Accounts', description: 'High-yield savings', image: '' },
  { name: 'Wire Transfer Fee', price: 25, category: 'Services', description: 'Wire transfer per transaction', image: '' },
  { name: 'International Transfer', price: 50, category: 'Services', description: 'International transfer fee', image: '' },
  { name: 'Premium Debit Card', price: 10, category: 'Cards', description: 'Monthly fee', image: '' }
];

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/transferDB').then(async ()=>{
  await Product.deleteMany({});
  await Product.insertMany(sample);
  console.log('Seeded products');
  process.exit(0);
}).catch(e=>{console.error(e); process.exit(1)})
