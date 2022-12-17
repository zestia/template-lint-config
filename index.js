module.exports = {
  name: 'zestia',

  configurations: {
    recommended: {
      plugins: ['ember-template-lint-plugin-prettier'],
      extends: [
        'recommended',
        'ember-template-lint-plugin-prettier:recommended'
      ],
      rules: {
        'no-capital-arguments': 'off'
      }
    }
  }
};
