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
        'invocable-blacklist': [],
        'no-debugger': true,
        'no-duplicate-attributes': true,
        'no-input-block': true,
        'no-input-tagname': true,
        'no-unbound': true,
        'no-outlet-outside-routes': true,
        'no-trailing-spaces': true,
        'no-html-comments': true,
        'no-partial': true,
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
        'table-groups': true,
        'template-length': false,
      }
    }
  }
};
