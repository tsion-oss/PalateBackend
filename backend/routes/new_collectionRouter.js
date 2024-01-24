const Router = require('express').Router()
const express = require('express')
const controller = require('../controllers/newController')




Router.get('/', controller.getAllNewCollection,)
Router.post('/',  controller.createNewCollection)
Router.get('/:id',  controller.getNewCollectionById)
Router.put('/:id', controller.updateNewCollectionById)
Router.delete('/:id', controller.deleteNewCollectionById)

module.exports = Router