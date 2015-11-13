## Why

BRJS projects wanting to use NPM libraries can create a `package.json` file for their project containing the dependencies of any libraries they want, with a simple exporting script to ensure the libraries are actually available. There are a number of tools that can do the bundling.

## How

Rollup isn't the fastest (WebPack is), and doesn't always produce the smallest bundles (for CommonJS, browserify does), but it has some advantages over Browserify, WebPack and SystemJS:

  * It has a simple plugin system.
  * Its bundles don't require ancillary libraries to work.
  * For ES6 modules, it uses tree-shaking so that it only bundles the parts of a module you actually use.

At present however, there are two stumbling blocks I've hit:

  1. I can't get any benefit from tree-shaking of NPM libraries because I can't enable the `jsnext` flag.
  2. I can't have source-maps enabled because the CommonJS transformation plug-in doesn't support source-maps.
