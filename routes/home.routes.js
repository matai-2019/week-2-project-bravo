// External Imports
const router = require('express').Router()

router.get('/', (req, res) => {
  res.redirect('/welcome')
})

router.get('/welcome', (req, res) => {
  //Render
  
  res.send('Welcome')
})

router.get('welcome/:username', (req, res) => {
  //render

  res.send(`status is ${res.status}`)
})

module.exports = router
