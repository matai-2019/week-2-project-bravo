// External Imports
const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('Hello, World!')
})

router.get('/:username', (req, res) => {
  res.send(`status is ${res.status}`)
})

module.exports = router
