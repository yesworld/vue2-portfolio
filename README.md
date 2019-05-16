# portfolio

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### How I deployed the project on github? 
1. Create a file config `vue.config.js` with the following code:
```javascript
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/'
    : '/'
}
```

2. Installed `gh-pages`
```javascript
yarn add gh-pages -D
```

3. Added the script to the package `package.json`
```javascript
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
