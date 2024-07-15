const mongoose=require('mongoose');
const apiError = require('../utils/apiError');
const Dishes= require('../models/product')

const getAll=async(req,res)=>{
    try {
        const data =await Dishes.find();
        return res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
const getPending= async (req, res) => {
    const { isPublished } = req.query;
    
    try {
        let products;
        if (isPublished === 'true') {
            products = await Dishes.find({ isPublished: true });
        } else if (isPublished === 'false') {
            products = await Dishes.find({ isPublished: false });
        } else {
            throw new apiError("Invalid parameter")}
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const toggle=async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Dishes.findById(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        product.isPublished = !product.isPublished;
        await product.save();
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports={
    getPending,
    getAll,
    toggle
}