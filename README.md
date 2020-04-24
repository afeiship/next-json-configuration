# next-configuration
> Json configuration for next.

## installation
```bash
npm install -S @feizheng/next-configuration
```

## apis
| api    | params       | description              |
| ------ | ------------ | ------------------------ |
| get    | path         | Get value from path      |
| gets   | -            | Get all values.          |
| set    | (path,value) | Set value by path.       |
| sets   | object       | Set multi value by path. |
| update | (ojbect)     | Set value and save.      |
| save   | -            | Save to path.            |

## usage
```js
import NxConfiguration from '@feizheng/next-configuration';

// code goes here:
const conf = new NxConfiguration({ path: './package.json'});

conf.set('name','@feizheng/next-configuration');
conf.set('scirpts.build','gulp');
conf.save();
```
