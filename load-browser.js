var expand = require('./expand')

module.exports = function(TypedArray, data) {
  var str  = atob(data)
  var data = []

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i)
    data.push(c)
  }

  return expand(new TypedArray(new Uint8Array(data).buffer))
}
