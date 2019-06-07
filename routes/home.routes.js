// External Imports
const router = require('express').Router()
const viewData = {
  title: 'Kanye Stress Test'
}

router.get('/', (req, res) => {
  res.redirect('/welcome')
})

router.get('/welcome', (req, res) => {
  res.render('welcome.hbs')
})

router.get('/welcome/:username', (req, res) => {

  // res.render('slider.html')
  res.send('working')
})

module.exports = router
