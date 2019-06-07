// External Imports
const router = require('express').Router()

router.get('/', (req, res) => {
  res.redirect('/welcome')
})

router.get('/welcome', (req, res) => {
  res.render('welcome.hbs')
})

router.post('/welcome', (req, res) => {

  res.redirect(`/welcome/${req.body.name}`)
})

router.get('/welcome/:username', (req, res) => {
  //render

  res.send(`status is ${res.status}`)
})

module.exports = router
