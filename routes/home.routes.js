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
  // res.render('slider.html')
  res.send('working')
})

module.exports = router
