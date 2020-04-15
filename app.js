
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();


// model import
const Product = require('./models/product');

// bdd connection
mongoose.connect(process.env.DB_CONNECTION_STRING,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

// JSON to JavaScript
app.use(bodyParser.json());

// CREATE a product
app.post('/api/products', (req, res) => {
    const product = new Product({
        ...req.body
    });

    product.save()
    .then(product => res.status(201).json({ product }))
    .catch(error => res.status(400).json({ error }));
});

// READ all products
app.get('/api/products', (req, res) => {
    Product.find()
        .then(products => res.status(200).json({ products: products }))
        .catch(error => res.status(400).json({ error }));
});

// READ a product
app.get('/api/products/:id', (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.status(200).json({ product: product}))
        .catch(error => res.status(400).json({ error }));
});

// UPDATE a product
app.put('/api/products/:id', (req, res) => {
    console.log(req.body)
    Product.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Modified!'}))
    .catch(error => res.status(400).json({ error }));
});

// DELETE a product
app.delete('/api/products/:id', (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then( () => res.status(200).json({ message: "Deleted!"}))
        .catch(error => res.status(400).json({ error }));
});

module.exports = app;