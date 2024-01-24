const Router = require('express').Router()
const express = require('express')
const controller = require('../controllers/cartController')




Router.get('/', controller.getCart,)
Router.post('/',  controller.createCart)
Router.get('/:id',  controller.getCartById)
Router.put('/:id', controller.updateCartById)
Router.delete('/:id', controller.deleteCartById)

module.exports = Router