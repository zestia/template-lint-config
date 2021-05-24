module.exports = {
  name: 'zestia',

  configurations: {
    recommended: {
      plugins: ['ember-template-lint-plugin-prettier'],

      extends: [
        'recommended',
        'octane',
        'ember-template-lint-plugin-prettier:recommended'
      ],

      rules: {
        'no-element-event-actions': true,
        'no-trailing-spaces': true,
        'no-yield-only': true
      }
    }
  }
};
