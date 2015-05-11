precision mediump float;

uniform mat4 proj;
uniform mat4 view;
uniform vec3 eye;

attribute vec3 position;
attribute vec3 normal;
varying   vec3 vnormal;
varying   vec3 veye;
varying   vec3 vpos;

void main() {
  vnormal = normal;
  vpos    = position;
  veye    = eye;

  gl_Position = proj * view * vec4(position, 1);
}
