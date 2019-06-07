// External Imports
const router = require('express').Router()
const viewData = {
  title: 'Kanye Stress Test'
}

router.get('/', (req, res) => {
  res.redirect('/welcome')
})

router.get('/welcome', (req, res) => {
  res.render('welcome', viewData)
})

router.post('/welcome', (req, res) => {
  res.redirect(`/welcome/${req.body.name}`)
})

router.get('/welcome/:username', (req, res) => {
  // res.render('slider.html')
  res.send('working')
})

module.exports = router
