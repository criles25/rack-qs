# rack-qs

## Features
- Encode query string params in a way that [Rack](https://github.com/rack/rack)-based applications can understand
  - `application/x-www-form-urlencoded` and `application/json` requests
  - Nested objects and arrays work :+1:
- Universal (Isomorphic)
- (COMING SOON) Capybara tested, use with confidence

## Installation
Node.js:
```shell
$ npm install rack-qs --save
```
Yarn:
```shell
$ yarn add rack-qs
```
the browser:
```html
<script src="dist/rack-qs.js"></script>
```

## Usage
CommonJS:
```javascript
const rackQs = require('rack-qs');

let obj = { key1: 'value1', key2: [10, 20, 30] };
let str = rackQs.stringify(obj);
// => 'key1=value1&key2%5B%5D=10&key2%5B%5D=20&key2%5B%5D=30'
```
ES6 import:
```javascript
import * as rackQs from 'rack-qs';

let obj = { key1: 'value1', key2: [10, 20, 30] };
let str = rackQs.stringify(obj);
// => 'key1=value1&key2%5B%5D=10&key2%5B%5D=20&key2%5B%5D=30'
```
`<script></script>` tag:
```javascript
let obj = { key1: 'value1', key2: [10, 20, 30] };
let str = window.rackQs.stringify(obj);
// => 'key1=value1&key2%5B%5D=10&key2%5B%5D=20&key2%5B%5D=30'
```

## Options
Rack decodes `application/x-www-form-urlencoded` and `application/json` requests differently. To specify which kind of request, pass an optional second argument `options`.

```javascript
let obj = { foo: [ { bar: 'baz' } ] };
let options = { form: true };
let str = rackQs.stringify(obj, options);
// => 'foo%5B0%5D%5Bbar%5D=baz'
```

`options.form` is `false` by default.

## Browser Support
Chrome, Firefox, Safari, Edge, and IE9+.

## License
MIT