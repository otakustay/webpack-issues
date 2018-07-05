# Reproduce steps

1. `npm install`
2. `$(npm bin)/webpack-dev-server`
3. Open `http://localhost:9999`

## Expected

Display "side-effect"

## Actual

Display "very-source"

## Explanation

The import orders are:

```
src/index -> side-effect/index
    -> side-effect/bridge -> very-soruce/index.less
    -> side-effect/index.less
```

The `very-soruce/index.less` should be placed **before** `side-effect/index.less` as shown in import order, however when `sideEffects` and `concatenateModules` optimizations are both enabled, the order is reverted.

Disable either `sideEffects` or `concatenateModules` in `webpack.config.js` solves this issue with the cost of code size increasing.
