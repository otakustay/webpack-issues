# webpack-issues

`babel-loader` and `worker-loader` works different in subtle config differences.

Both `webpack --config=webpack.good-1.config.js` and `webpack --config=webpack.good-2.config.js` compiles successfully, however `webpack --config=webpack.bad.config.js` to compile with errors:

```text
ERROR in ./src/background.worker.js
Module build failed: Error: Final loader (./node_modules/worker-loader/dist/cjs.js) didn't return a Buffer or String
```

The diff between `good-1` and `bad` is related to how `use` is specified:

The diff between `good-2` and `bad` is simply focused on the `options` property to `babel-loader`.
