module.exports = {
  name: 'zestia',

  rules: {

  },

  configurations: {
    recommended: {
      extends: 'recommended',
      rules: {
        // 'attribute-indentation': true,
        'bare-strings': false,
        'block-indentation': true,
        'deprecated-inline-view-helper': true,
        'deprecated-render-helper': true,
        'eol-last': 'never',
        'html-comments': true,
        'img-alt-attributes': false,
        'inline-link-to': false,
        'inline-styles': true,
        'invalid-interactive': true,
        'link-rel-noopener': 'strict',
        'nested-interactive': true,
        'no-debugger': true,
        'no-duplicate-attributes': true,
        'no-log': true,
        'no-trailing-spaces': true,
        'quotes': 'double',
        'self-closing-void-elements': true,
        'simple-unless': true,
        'style-concatenation': true,
        'table-groups': false,
        'template-length': false,
        'triple-curlies': true,
        'unused-block-params': true
      }
    }
  }
};
