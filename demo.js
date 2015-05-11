var canvas      = document.body.appendChild(document.createElement('canvas'))
var camera      = require('canvas-orbit-camera')(canvas)
var gl          = require('gl-context')(canvas, render)
var perspective = require('gl-mat4/perspective')
var Geom        = require('gl-geometry')
var eye         = require('eye-vector')
var Shader      = require('gl-shader')
var glslify     = require('glslify')
var normals     = require('normals')

var model   = require('./')
var proj    = new Float32Array(16)
var view    = new Float32Array(16)
var snowden = Geom(gl)
  .attr('position', model)
  .attr('normal', normals.vertexNormals(model.cells, model.positions))

var start   = Date.now()
var shader  = Shader(gl
  , glslify('./demo.vert')
  , glslify('./demo.frag')
)

camera.distance = 12

function render() {
  const width  = gl.drawingBufferWidth
  const height = gl.drawingBufferHeight

  gl.viewport(0, 0, width, height)
  gl.clearColor(0, 0, 0, 1)
  gl.clear(gl.COLOR_BUFFER_BIT)
  gl.enable(gl.CULL_FACE)
  gl.enable(gl.DEPTH_TEST)

  camera.view(view)
  camera.tick()
  perspective(proj, Math.PI / 4, width / height, 0.01, 100)

  snowden.bind(shader)
  shader.uniforms.time = (Date.now() - start) / 1000
  shader.uniforms.proj = proj
  shader.uniforms.view = view
  shader.uniforms.eye  = eye(view)
  snowden.draw()
}

window.addEventListener('resize'
  , require('canvas-fit')(canvas)
  , false
)
