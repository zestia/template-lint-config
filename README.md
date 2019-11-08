# @zestia/ember-template-lint-plugin

This package provides our template linting rules for Ember Apps and Addons.

The rules extend the `recommended` rules provided by Ember, with a few extra ones specific to Zestia.

## Installation

```
npm install --save @zestia/ember-template-lint-plugin
```

## Setup

1. Create the following file `.template-lintrc.js`

    ```javascript
    module.exports = {
      plugins: ['@zestia/ember-template-lint-plugin'],
      extends: 'zestia:recommended'
    };
    ```

2. Add the following to `scripts` in `package.json`

    ```
    "lint:hbs": "ember-template-lint ."
    ```

## Running

```
npm run lint:hbs
```

## Related repos:

* https://github.com/zestia/ember-template-lint-plugin
* https://github.com/zestia/stylelint-config
* https://github.com/zestia/eslint-config
* https://github.com/zestia/prettier-config