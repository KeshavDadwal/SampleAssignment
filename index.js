const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(express.json());
require('dotenv').config();

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log('Connected to MongoDB');

    // const products = [
    //   { name: 'Product 1', description: 'Description for product 1', price: 99.99 },
    //   { name: 'Product 2', description: 'Description for product 2', price: 149.99 },
    //   { name: 'Product 3', description: 'Description for product 3', price: 199.99 },
    // ];

    // Product.insertMany(products)
    //   .then(() => console.log('Sample products added to the database'))
    //   .catch((err) => console.error('Error inserting sample products:', err));
  })
  .catch((err) => console.error('Could not connect to MongoDB', err));


app.use('/api', userRoutes);
app.use('/api', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
