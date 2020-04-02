module.exports = {
  name: 'zestia',

  configurations: {
    recommended: {
      extends: 'octane',
      rules: {
        'eol-last': 'never',
        'no-element-event-actions': true,
        'no-trailing-spaces': true,
        'no-yield-only': true
      }
    }
  }
};

