const mongoose = require('mongoose')

const all_productSchema = require('./all_products')
const dataSchema = require('./data')
const new_collectionSchema = require('./new_collection')
const cartSchema = require('./cart')



const all_product = mongoose.model('all_products', all_productSchema)
const data = mongoose.model('data', dataSchema)
const new_collection = mongoose.model('new_collection', new_collectionSchema)
const cart = mongoose.model('cart', cartSchema)

module.exports = {
    all_product,
    data,
    new_collection,
    cart
}