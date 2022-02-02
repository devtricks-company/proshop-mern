import express from 'express';
import products from './data/products.js';

const app = express();

app.get('/',(req,res) => {
    res.json('API is Running.....')
})


app.get('/api/products',(req,res) => {
    res.json(products);
})

app.get('/api/products/:id',(req,res) => {
    const product = products.find(item => item._id == req.params.id);
    res.json(product);
})

const PORT = 5000;
app.listen(PORT,() => console.log('server is running on port 5000'));