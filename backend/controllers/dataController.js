
const { data } = require('../models/index.js');
const db = require('../db')


async function createData(req, res) {
  try {
    const newData = new data(req.body);
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


async function getAllData(req, res) {
  try {
    const newData = await data.find();
    res.json(newData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function getAllDataById(req, res) {
  const { id } = req.params;
  try {
    const newData = await data.findById(id);
    if (!newData) {
      return res.status(404).json({ error: 'new data not found' });
    }
    res.json(newData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function updateAllDataById(req, res) {
  const { id } = req.params;
  try {
    const updatedNewData = await data.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedNewData) {
      return res.status(404).json({ error: 'New data not found' });
    }
    res.json(updatedNewData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deleteAllDataById = async (req, res) => {
  try{
    const { id } = req.params
    const deleted = await data.findByIdAndDelete(id)
    if (deleted) {
        return res.status(200).send('new data deleted')
    }
    throw new Error('data not found')
} catch (error) {
    return res.status(500).send(error.message)
}
}


module.exports = {
  createData,
  getAllData,
  getAllDataById,
  updateAllDataById,
  deleteAllDataById,
};
