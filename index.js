module.exports = {
  name: '@zestia/template-lint-config',

  plugins: ['ember-template-lint-plugin-prettier'],

  extends: ['recommended', 'ember-template-lint-plugin-prettier:recommended'],

  rules: {
    'no-element-event-actions': true,
    'no-trailing-spaces': true,
    'no-yield-only': true
  }
};
