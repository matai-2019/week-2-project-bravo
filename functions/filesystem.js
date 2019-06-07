const fs = require('fs')

// Used for Async File Writes
// @Params Object data, String path, Function done
function writeFile (data, path, done) {
  fs.writeFile(path, data, (err) => {
    if (err) done(err)
    done()
  })
}

function readFile (path, type, done){
    fs.readFile(path, type, (err, result) => {
        if (err) done(err)
        done(null, result)
      })
}

// Write Binary files like images
// @Params String name, String binary, String path, Function done
function uploadImage (name, binary, path, done) {
    const fullPath = path + '/' + name
  fs.writeFile(fullPath, binary, (err) => {
    if (err) done(err)
    done()
  })
}

module.exports = {
  writeFile,
  readFile,
  dirname: __dirname,
  uploadImage
}