# jsdoc-vue
[![Build Status](https://travis-ci.org/QingWei-Li/jsdoc-vue.svg?branch=master)](https://travis-ci.org/QingWei-Li/jsdoc-vue)
[![npm](https://img.shields.io/npm/v/jsdoc-vue.svg)](https://www.npmjs.com/package/jsdoc-vue)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> A jsdoc plugin that parses *.vue files.

# Installation
```shell
yarn add jsdoc-vue vue-template-compiler --dev
# $ npm i jsdoc-vue vue-template-compiler -D
```

# Usage
[Configuring JSDoc with conf.json](http://usejsdoc.org/about-configuring-jsdoc.html)
```json
{
  "plugins": ["node_modules/jsdoc-vue"],
  "source": {
    "includePattern": "\\.(vue|js)$"
  }
}
```

# Test
```shell
npm test
```
