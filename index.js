module.exports = {
  name: 'zestia',

  configurations: {
    recommended: {
      extends: 'recommended',
      rules: {
        'attribute-indentation': false,
        'img-alt-attributes': false,
        'link-rel-noopener': 'strict',
        'no-implicit-this': true
      }
    }
  }
};
