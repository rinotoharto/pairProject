const User = require('../models').User

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
    res.send(req.body)
  }

}

module.exports = UserController