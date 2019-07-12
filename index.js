module.exports = {
  name: 'zestia',

  /**
   * Commented out rules are because of:
   * https://github.com/ember-template-lint/ember-template-lint/issues/666
   */

  configurations: {
    recommended: {
      extends: 'recommended',
      rules: {
        'attribute-indentation': false,
        'eol-last': 'never',
        'link-href-attributes': true,
        'link-rel-noopener': 'strict',
        // 'no-abstract-roles': true,
        // 'no-extra-mut-helper-argument': true,
        'no-implicit-this': true,
        // 'no-negated-condition': true,
        // 'no-positive-tabindex': true,
        'no-trailing-spaces': true,
        'img-alt-attributes': false,
        // 'require-valid-alt-text': false
      }
    }
  }
};

