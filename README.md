# snowden

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

3D mesh of [Snowden's Bust](http://www.wired.com/2015/05/now-can-3-d-print-copy-nycs-illegal-snowden-bust/).

[![snowden](http://i.imgur.com/5UQDjiK.png)](http://stack.gl/snowden/)

[View demo](http://stack.gl/snowden/).

[Original source](http://www.thingiverse.com/thing:815042/).

## Usage

[![NPM](https://nodei.co/npm/snowden.png)](https://nodei.co/npm/snowden/)

Like the [bunny](http://ghub.io/bunny) module, you can pull
this in as a
[simplicial complex](http://ghub.io/simplicial-complex).

### `snowden.positions`

A list of positions in the mesh.

``` javascript
[ [0.432908423, 1.28938290, 0.43289809],
  [0.448930292, 0.90342890, 0.93289402], // ...
]
```

### `snowden.cells`

A list of faces in the mesh, indexed according to
`snowden.positions`.

``` javascript
[ [0, 1, 2],
  [2, 1, 3], // ...
]
```

## Contributing

See [stackgl/contributing](https://github.com/stackgl/contributing) for details.

## License

MIT. See [LICENSE.md](http://github.com/stackgl/snowden/blob/master/LICENSE.md) for details.
