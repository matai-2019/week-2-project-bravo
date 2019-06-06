const request = require('supertest')
const server = require('../server.js')

test('jest working', () => {
  expect(true).toBeTruthy()
})

test('test username route returns 200', (done) => {
  request(server)
    .get('/:username')
    .end(function (err, res) {
      if (err) throw err

      expect(res.status).toBe(200)

      done()
    })
})
