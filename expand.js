module.exports = expand

function expand(data) {
  var arr = []
  var j   = 0

  for (var i = 0; i < data.length; i) {
    arr[j++] = [ data[i++], data[i++], data[i++] ]
  }

  return arr
}
