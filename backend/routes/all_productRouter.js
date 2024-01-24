const Router = require('express').Router()
const express = require('express')
const controller = require('../controllers/allController')




Router.get('/', controller.getAllProduct,)
Router.post('/',  controller.createAllProduct)
Router.get('/:id',  controller.getAllProductById)
Router.put('/:id', controller.updateAllProductById)
Router.delete('/:id', controller.deleteAllProductById)

module.exports = Router