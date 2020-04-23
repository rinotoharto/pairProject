const routes = require('express').Router()
const UserController = require('../controller/userController')


function checkSession(req, res, next) {
  if(req.session.userId) {
    next()
  } else {
    res.redirect(`/?msg=Silahkan Login terlebih dahulu`)
  }
}

routes.get('/register', UserController.register)
routes.post('/register', UserController.postRegist)
routes.get('/login', UserController.login)
routes.post('/login', UserController.postLogin)
routes.get('/listItem',  checkSession, UserController.getList)
routes.get('/logOut', UserController.logOut)


module.exports = routes