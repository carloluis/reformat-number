# reformat-number &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/carloluis/reformat-number/master/LICENSE)

Reformat javascript string-numbers with ease.

This is a simple but opinionated number re-formatter.

* Input: a valid number which might contain commas and a dot for decimal separation.
* Output: same number with commas on right places (between each three digits group).

## Instalation

```bash
yarn add reformat-number
```

## Usage

```js
const reformat = require('reformat-number');

reformat('1234567890'); // => '1,234,567,890'
reformat('123,456,7890'); // => '1,234,567,890'
reformat('-12345678.90'); // => '-12,345,678.90'
reformat('1,2,3,4,5,6'); // => '123,456'
```
