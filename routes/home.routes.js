// External Imports
const router = require('express').Router()
const data = require('../data/moods.json').moods
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
  res.render('stressLevel', { name: name })
  // res.send(`<h1>hello ${name}</h1>`)
})

router.post('/welcome/:username/', (req, res) => {
  const name = req.params.username
  const level = req.body.stressLevel
  console.log('posted ', name, level)
  res.redirect(`${name}/${level}`)
})

router.get('/welcome/:username/:stressLevel', (req, res) => {
  const level = req.params.stressLevel

  const kanye = data.find(kanye => kanye.id == level)
  res.send(`<h1>${kanye.advice}</h1>`)
})

module.exports = router
