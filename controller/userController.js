const User = require('../models').User
const bcrypt = require('bcryptjs')

class UserController {
  static register(req, res) {
    let alert = req.query
    res.render('register', {alert})
  }

  static postRegist(req, res) {
    User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    })
    .then(() => {
      res.redirect('/')
    })
    .catch(err => {
      const msg = []
      for(let i = 0; i < err.errors.length; i++) {
        msg.push(err.errors[i].message)
      }
      res.redirect(`/user/register?msg=${msg.join(', ')}`)
    })
  }

  static login(req, res) {
    let alert = req.query
    res.render('login', {alert})
  }

  static postLogin(req, res) {
    User.findOne({where: {username: req.body.username}})
    .then(user => {
      if(!user) {
        res.redirect(`/user/login?msg=Username not found`)
      } else {
        if(bcrypt.compareSync(req.body.password, user.password)) {
          req.session.userId = user.id
          res.redirect(`/user/listItem`)
        } else {
          res.redirect(`/user/login?msg=username or password wrong`)
        }
      }
    })
    .catch(err => {
      res.send(err)
    })
  }

  static getList(req, res) {
    res.render('listItem')
  }

  static logOut(req, res) {
    req.session.destroy(err => {
      res.redirect(`/?msg=Anda telah Logout`)
    })
  }
  

}

module.exports = UserController