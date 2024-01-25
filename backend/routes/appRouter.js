const Router = require('express').Router()
const all_productRouter = require('./all_productRouter')
const dataRouter = require('./dataRouter')
const new_collectionRouter = require('./new_collectionRouter')
const cartRouter = require('./cartRouter')




Router.use('/all_product', all_productRouter)
Router.use('/data', dataRouter)
Router.use('/new_collection', new_collectionRouter)
Router.use('/cart', cartRouter)


module.exports = Router