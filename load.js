var expand = require('./expand')

module.exports = function(TypedArray, data) {
  var buffer = new Buffer(data, 'base64')
  var number = new Uint8Array(buffer)

  return expand(new TypedArray(number.buffer))
}
