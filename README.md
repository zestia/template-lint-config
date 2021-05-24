# @zestia/template-lint-config

This package provides linting rules for HTML templates.

The rules are based on community standards, with a few extra ones specific to Zestia.

## Installation

```
npm install --save-dev @zestia/template-lint-config
```

## Setup

1. Create the following file `.template-lintrc.js`

   ```javascript
   module.exports = require('@zestia/template-lint-config');
   ```

2. Add the following to `scripts` in `package.json`

   ```
   "lint:hbs": "ember-template-lint ."
   ```

## Running

```
npm run lint:hbs
```

## Related repos

- https://github.com/zestia/template-lint-config
- https://github.com/zestia/stylelint-config
- https://github.com/zestia/eslint-config
- https://github.com/zestia/prettier-config
