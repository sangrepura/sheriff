const unicorn = require('eslint-plugin-unicorn');

const unicornRules = {
  'unicorn/better-regex': 2,
  'unicorn/explicit-length-check': 2,
  'unicorn/consistent-function-scoping': 2,
  'unicorn/prefer-default-parameters': 2,
  'unicorn/no-array-push-push': 2,
  'unicorn/prefer-array-index-of': 2,
  'unicorn/prefer-array-flat-map': 2,
  'unicorn/prefer-array-some': 2,
  'unicorn/prefer-array-find': 2,
  'unicorn/prefer-array-flat': 2,
  'unicorn/prefer-includes': 2,
  'unicorn/prefer-top-level-await': 2,
  'unicorn/prefer-spread': 2,
  'unicorn/no-useless-spread': 2,
  'unicorn/no-useless-undefined': 2,
  'unicorn/no-for-loop': 2,
  'unicorn/prefer-type-error': 2,
  'unicorn/prefer-object-from-entries': 2,
  'unicorn/no-instanceof-array': 2,
  'unicorn/prefer-native-coercion-functions': 2,
  'unicorn/prefer-logical-operator-over-ternary': 2,
  'unicorn/prefer-event-target': 2,
  'unicorn/no-new-array': 2,
  'unicorn/throw-new-error': 2,
  'unicorn/no-array-reduce': 2,
  'unicorn/no-useless-length-check': 2,
  'unicorn/prefer-prototype-methods': 2,
  'unicorn/prefer-date-now': 2,
  'unicorn/prefer-export-from': [2, { ignoreUsedVariables: true }],
  'unicorn/no-new-buffer': 2,
  'unicorn/no-unsafe-regex': 2,
  'unicorn/prefer-query-selector': 2,
  'unicorn/prefer-string-replace-all': 2,
};

module.exports = [
  'eslint:recommended',
  {
    files: ['**/*{js,ts,jsx,tsx}'],
  },
  {
    files: ['**/*{js,ts,jsx,tsx}'],
    plugins: {
      unicorn,
    },
    rules: unicornRules,
  },
];
