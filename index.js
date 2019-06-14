module.exports = {
  name: 'zestia',

  configurations: {
    recommended: {
      extends: 'recommended',
      rules: {
        'attribute-indentation': false,
        'eol-last': 'never',
        'img-alt-attributes': false,
        'link-href-attributes': true,
        'link-rel-noopener': 'strict',
        'no-abstract-roles': true,
        'no-extra-mut-helper-argument': true,
        'no-implicit-this': true,
        'no-negated-condition': true,
        'no-positive-tabindex': true,
        'no-trailing-spaces': true
      }
    }
  }
};

