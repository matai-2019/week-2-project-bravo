// External Imports
const router = require('express').Router()
const data = require('../data/moods.json')
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
  const name = req.params.username
  // res.render('slider.html')
  res.send(`<h1>hello ${name}</h1>`)
})

router.post('/welcome/:username/', (req, res) => {
  res.redirect(`welcome/${req.params.username}/${req.body.stressLevel}`)
})

router.get('/welcome/:username/:stressLevel', (req, res) => {
  const level = req.params.stressLevel
  res.send(`<h1>hello ${level}</h1>`)
})


module.exports = router
