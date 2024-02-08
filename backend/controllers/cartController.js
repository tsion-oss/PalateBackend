
const { cart } = require('../models/index.js')
const db = require('../db')


async function createCart(req, res) {
  try {
    const newCart = new cart(req.body);
    const savedCart = await newCart.save();
    res.status(201).json(savedCart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


async function getCart(req, res) {
  try {
    const newCart = await cart.find();
    res.json(newCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function getCartById(req, res) {
  const { id } = req.params;
  try {
    const newCart = await cart.findById(id);
    if (!newCart) {
      return res.status(404).json({ error: 'cart not found' });
    }
    res.json(newCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function updateCartById(req, res) {
  const { id } = req.params;
  try {
    const updatedCart = await cart.findOneAndUpdate({ id: parseInt(id) }, req.body, { new: true });
    if (!updatedCart) {
      return res.status(404).json({ error: 'cart not found' });
    }
    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deleteCartById = async (req, res) => {
  try{
    const { id } = req.params
    const deleted = await cart.findByIdAndDelete(id)
    if (deleted) {
        return res.status(200).send('cart deleted')
    }
    throw new Error('cart not found')
} catch (error) {
    return res.status(500).send(error.message)
}
}


module.exports = {
  createCart,
  getCart,
  getCartById,
  updateCartById,
  deleteCartById,
};
