module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'at-rule-empty-line-before': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'responsive', 'variants', 'screen']
      }
    ],
    'max-empty-lines': 2,
    'unit-whitelist': ['em', 'rem', '%', 'ms', 's', 'px', 'deg']
  }
};
