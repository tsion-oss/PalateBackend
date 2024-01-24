
const { new_collection } = require('../models/index.js');
const db = require('../db')


async function createNewCollection(req, res) {
  try {
    const newCollection = new new_collection(req.body);
    const savedCollection = await newCollection.save();
    res.status(201).json(savedCollection);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


async function getAllNewCollection(req, res) {
  try {
    const newCollection = await new_collection.find();
    res.json(newCollection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function getNewCollectionById(req, res) {
  const { id } = req.params;
  try {
    const newCollection = await new_collection.findById(id);
    if (!newCollection) {
      return res.status(404).json({ error: 'new collection not found' });
    }
    res.json(newCollection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


async function updateNewCollectionById(req, res) {
  const { newCollectionId } = req.params;
  try {
    const updatedNewCollection = await new_collection.findByIdAndUpdate(newCollectionId, req.body, { new: true });
    if (!updatedNewCollection) {
      return res.status(404).json({ error: 'New collection not found' });
    }
    res.json(updatedNewCollection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deleteNewCollectionById = async (req, res) => {
  try{
    const { id } = req.params
    const deleted = await new_collection.findByIdAndDelete(id)
    if (deleted) {
        return res.status(200).send('new collection deleted')
    }
    throw new Error('new collection not found')
} catch (error) {
    return res.status(500).send(error.message)
}
}


module.exports = {
  createNewCollection,
  getAllNewCollection,
  getNewCollectionById,
  updateNewCollectionById,
  deleteNewCollectionById,
};
