# Reformat-Number &middot; [![GitHub license](https://img.shields.io/badge/1,234-.56-blue.svg)](https://github.com/carloluis/reformat-number)

> re-format javascript string-numbers with ease

[![GitHub license](https://img.shields.io/github/license/carloluis/reformat-number.svg)](https://github.com/carloluis/reformat-number/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/reformat-number.svg)](https://www.npmjs.com/package/reformat-number)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8d09880ccd064f018d37d1565e70f9ac)](https://www.codacy.com/app/carloluis/reformat-number?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=carloluis/reformat-number&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/8d09880ccd064f018d37d1565e70f9ac)](https://www.codacy.com/app/carloluis/reformat-number?utm_source=github.com&utm_medium=referral&utm_content=carloluis/reformat-number&utm_campaign=Badge_Coverage)

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
