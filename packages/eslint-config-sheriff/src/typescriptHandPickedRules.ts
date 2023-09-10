export const typescriptHandPickedRules = {
  '@typescript-eslint/ban-ts-comment': 0,
  '@typescript-eslint/no-unsafe-assignment': 0,
  '@typescript-eslint/no-array-constructor': 0,
  '@typescript-eslint/no-use-before-define': 2,
  '@typescript-eslint/no-inferrable-types': 2,
  '@typescript-eslint/no-loop-func': 2,
  '@typescript-eslint/no-non-null-assertion': 2,
  '@typescript-eslint/prefer-function-type': 2,
  '@typescript-eslint/prefer-string-starts-ends-with': 2,
  '@typescript-eslint/return-await': 2,
  '@typescript-eslint/consistent-type-definitions': 2,
  '@typescript-eslint/consistent-type-assertions': 2,
  '@typescript-eslint/consistent-type-imports': [
    2,
    {
      fixStyle: 'inline-type-imports',
    },
  ],
  '@typescript-eslint/consistent-type-exports': [
    2,
    { fixMixedExportsWithInlineTypeSpecifier: true },
  ],
  '@typescript-eslint/explicit-module-boundary-types': 2,
  '@typescript-eslint/switch-exhaustiveness-check': 2,
  '@typescript-eslint/method-signature-style': 2,
  '@typescript-eslint/prefer-nullish-coalescing': [
    2,
    { ignorePrimitives: { string: true } },
  ],
  '@typescript-eslint/unified-signatures': 2,
  '@typescript-eslint/no-unused-expressions': [
    2,
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
      enforceForJSX: true,
    },
  ],
  '@typescript-eslint/array-type': 2,
  '@typescript-eslint/no-empty-function': 2,
  '@typescript-eslint/prefer-optional-chain': 2,
  '@typescript-eslint/dot-notation': 2,
  '@typescript-eslint/no-import-type-side-effects': 2,
  '@typescript-eslint/default-param-last': 2,
  '@typescript-eslint/no-shadow': [
    2,
    {
      hoist: 'all',
      allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      ignoreTypeValueShadow: true,
      ignoreFunctionTypeParameterNameValueShadow: true,
    },
  ],
};
