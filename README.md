# webpack-flush-chunks-webpack-v5-bug

```bash
rm -rf dist
webpack --json=stats.json
node test.js
```

Expected result:

```js
[ 'routeA.js', 'main.js' ]
```

Actual result:

```js
[
  'vendors-node_modules_react-dom_index_js.js',
  'routeA.js',
  'main.js'
]
```