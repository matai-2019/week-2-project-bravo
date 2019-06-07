const request = require('supertest')
const server = require('../server.js')
const cheerio = require('cheerio')

test('jest working', () => {
  expect(true).toBeTruthy()
})

test('test root redirects to /welcome', (done) => {
  request(server)
    .get('/')
    .end(function (err, res) {
      if (err) throw err

      expect(res.text).toBe('Found. Redirecting to /welcome')

      done()
    })
})

test('test username route returns 200', (done) => {
  request(server)
    .get('/welcome/:username')
    .end(function (err, res) {
      if (err) throw err

      expect(res.status).toBe(200)

      done()
    })
})

// test('test username matches route params', (done) => {
//   request(server)
//     .get('/welcome/tam')
//     .end(function (err, res) {
//       console.log(res.params)
//       const $ = cheerio.load(res.text)
//       const actual = $('h1').text
//       if (err) throw err
//       // expect(actual).toMatch(res)
//       done()
//     })
// })
