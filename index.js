module.exports = {
  name: 'zestia',

  rules: {

  },

  configurations: {
    recommended: {
      extends: 'recommended',
      rules: {
        // 'attribute-indentation': true,
        'block-indentation': true,
        'deprecated-inline-view-helper': true,
        'deprecated-render-helper': true,
        'eol-last': 'never',
        'img-alt-attributes': false,
        'inline-link-to': false,
        'link-rel-noopener': 'strict',
        'no-bare-strings': false,
        'no-debugger': true,
        'no-duplicate-attributes': true,
        'no-html-comments': true,
        'no-inline-styles': true,
        'no-invalid-interactive': true,
        'no-log': true,
        'no-nested-interactive': true,
        'no-trailing-spaces': true,
        'no-triple-curlies': true,
        'no-unused-block-params': true
        'quotes': 'double',
        'self-closing-void-elements': true,
        'simple-unless': true,
        'style-concatenation': true,
        'table-groups': false,
        'template-length': false,
      }
    }
  }
};
