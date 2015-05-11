precision mediump float;

varying vec3 vnormal;
varying vec3 veye;
varying vec3 vpos;
uniform float time;

#pragma glslify: cookt = require('glsl-specular-cook-torrance')
#pragma glslify: orenn = require('glsl-diffuse-oren-nayar')

void main() {
  vec3 ldir = normalize(vec3(0, 1, 0.5));
  vec3 vdir = normalize(veye - vpos);

  float dif  = orenn(ldir, vdir, vnormal, 0.3, 1.0);
  float spec = cookt(ldir, vdir, vnormal, 0.2, 0.7);

  vec3 color = vec3(0.9, 0.5, 0.3) * dif + spec * vec3(0.9, 0.7, 0.6);

  color += vec3(0.005, 0.003, 0.002);
  color = pow(color, vec3(0.4545));

  gl_FragColor = vec4(color, 1);
}
