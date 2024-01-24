
const { all_product } = require('../models/index.js');
const db = require('../db')


async function createAllProduct(req, res) {
  try {
    const newProduct = new all_product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


async function getAllProduct(req, res) {
  try {
    const newProduct = await all_product.find();
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function getAllProductById(req, res) {
  const { id } = req.params;
  try {
    const newProduct = await all_product.findById(id);
    if (!newProduct) {
      return res.status(404).json({ error: 'new product not found' });
    }
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function updateAllProductById(req, res) {
  const { newProductId } = req.params;
  try {
    const updatedNewProduct = await all_product.findByIdAndUpdate(newProductId, req.body, { new: true });
    if (!updatedNewProduct) {
      return res.status(404).json({ error: 'New product not found' });
    }
    res.json(updatedNewProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deleteAllProductById = async (req, res) => {
  try{
    const { id } = req.params
    const deleted = await all_product.findByIdAndDelete(id)
    if (deleted) {
        return res.status(200).send('new collection deleted')
    }
    throw new Error('product not found')
} catch (error) {
    return res.status(500).send(error.message)
}
}


module.exports = {
  createAllProduct,
  getAllProduct,
  getAllProductById,
  updateAllProductById,
  deleteAllProductById,
};
