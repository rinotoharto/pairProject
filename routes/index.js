const routes = require('express').Router()
const HomeController = require('../controller/homeController')
const UserRoutes = require('../routes/userRoutes')

routes.get('/', HomeController.getHome)
routes.use('/user', UserRoutes)

// routes.get('/*', HomeController.getError)

module.exports = routes