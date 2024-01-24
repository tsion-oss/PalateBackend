const Router = require('express').Router()
const express = require('express')
const controller = require('../controllers/dataController')




Router.get('/', controller.getAllData,)
Router.post('/',  controller.createData)
Router.get('/:id',  controller.getAllDataById)
Router.put('/:id', controller.updateAllDataById)
Router.delete('/:id', controller.deleteAllDataById)

module.exports = Router