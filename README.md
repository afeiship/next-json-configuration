# next-json-configuration
> Json configuration for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-json-configuration
```

## apis
| api | params | description   |
|-----|--------|---------------|
| get | -      | desc balabala |

## usage
```js
import NxJsonConfiguration from '@jswork/next-json-configuration';
import path from 'path';

const conf = new NxJsonConfiguration({ path: path.join(process.cwd(), 'package.json') });
conf.set('version', '1.0.1');
conf.get('version');  // 1.0.1
conf.save();
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-json-configuration/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-json-configuration
[version-url]: https://npmjs.org/package/@jswork/next-json-configuration

[license-image]: https://img.shields.io/npm/l/@jswork/next-json-configuration
[license-url]: https://github.com/afeiship/next-json-configuration/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-json-configuration
[size-url]: https://github.com/afeiship/next-json-configuration/blob/master/dist/next-json-configuration.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-json-configuration
[download-url]: https://www.npmjs.com/package/@jswork/next-json-configuration
