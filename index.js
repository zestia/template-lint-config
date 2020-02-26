module.exports = {
  name: 'zestia',

  configurations: {
    recommended: {
      extends: 'recommended',
      rules: {
        'eol-last': 'never',
        'link-href-attributes': true,
        'link-rel-noopener': 'strict',
        'no-abstract-roles': true,
        'no-action-modifiers': true,
        'no-action': true,
        'no-args-paths': true,
        'no-element-event-actions': true,
        'no-extra-mut-helper-argument': true,
        'no-implicit-this': true,
        'no-negated-condition': true,
        'no-obsolete-elements': true,
        'no-positive-tabindex': true,
        'no-trailing-spaces': true,
        'no-yield-only': true,
        'require-button-type': true,
        'require-valid-alt-text': false,
        'self-closing-void-elements': false
      }
    }
  }
};

