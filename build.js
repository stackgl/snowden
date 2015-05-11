const obj  = require('parse-obj')
const path = require('path')
const fs   = require('fs')

;[path.join(__dirname, 'snowden-lo.obj')
, path.join(__dirname, 'snowden-hi.obj')
].forEach(function(src) {
  obj(fs.createReadStream(src), function(err, result) {
    if (err) throw err

    var out = ''

    var positions = flatten(rotate(result.vertexPositions))
    var cells     = flatten(flip(result.facePositions))

    positions = new Buffer(new Uint8Array(new Float32Array(positions).buffer)).toString('base64')
    cells     = new Buffer(new Uint8Array(new Uint32Array(cells).buffer)).toString('base64')

    out += ';exports.positions = require("./load")(Float32Array, '
    out += JSON.stringify(positions)
    out += ')'
    out += ';exports.cells = require("./load")(Uint32Array, '
    out += JSON.stringify(cells)
    out += ')'

    var dst = src.replace(/snowden-(lo|hi)\.obj$/, '$1.js')

    fs.writeFileSync(dst, out)
  })
})


function flatten(arr) {
  var out = []
  var j   = 0

  for (var i = 0; i < arr.length; i++) {
    out[j++] = arr[i][0]
    out[j++] = arr[i][1]
    out[j++] = arr[i][2]
  }

  return out
}

function rotate(positions) {
  for (var i = 0; i < positions.length; i++) {
    var x = positions[i][0]
    var y = positions[i][1]
    var z = positions[i][2]

    positions[i][0] = x
    positions[i][1] = -z
    positions[i][2] = -y
  }

  return positions
}

function flip(cells) {
  for (var i = 0; i < cells.length; i++) {
    var x = cells[i][0]
    var y = cells[i][1]
    var z = cells[i][2]

    cells[i][0] = x
    cells[i][1] = z
    cells[i][2] = y
  }

  return cells
}
