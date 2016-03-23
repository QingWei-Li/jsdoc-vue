# jsdoc-vue

> A jsdoc plugin that parses *.vue files.

# Dependencies
[^Node 4.x](https://nodejs.org/)

# Installation
```shell
[sudo] npm i jsdoc-vue -D
```

# Usage
[Configuring JSDoc with conf.json](http://usejsdoc.org/about-configuring-jsdoc.html)
```json
{
  "plugins": ["jsdoc-vue"],
  "source": {
    "includePattern": ".+\\.vue|js$"
  }
}
```

# Options
Other options see [simpletransformcode-options](https://github.com/facebookarchive/jstransform#simpletransformcode-options)
```json
{
  "plugins": ["jsdoc-vue"],
  "source": {
    "includePattern": ".+\\.vue|js$"
  },
  "vue": {
    "es6": true,
    "harmony": true,
    "es6module": true,
    "extension": ["vue"]
  }
}
```

# Test
```shell
npm test
```
