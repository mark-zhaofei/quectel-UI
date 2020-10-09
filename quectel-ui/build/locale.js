const readDir = require('fs').readdirSync
const files = readDir('./examples/i18n/langs')
const entry = {}
files.forEach(file => {
  const name = file.split('.')[0]
  entry[name] = './examples/i18n/langs/' + file
})
module.exports = entry
