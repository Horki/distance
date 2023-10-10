module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'prettier',
        'plugin:jest/recommended',
    ],
    plugins: ['@typescript-eslint', 'prettier', 'jest'],
    rules: {
        'no-var': 'error',
        indent: ['error', 2, { SwitchCase: 1 }],
        'no-multi-spaces': 'error',
        'space-in-parens': 'error',
        'no-multiple-empty-lines': 'error',
        'prefer-const': 'error',
        'prettier/prettier': ['error'],
        'func-names': 0,
        'no-console': ['error', {allow: ['warn', 'error']}],
        'no-unused-vars': 0,
        'no-shadow': 0,
        'no-unused-expressions': 0,
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'no-param-reassign': ['error', {props: true, ignorePropertyModificationsFor: ['draft']}],
        'no-await-in-loop': 0,
        'no-use-before-define': 0,
        'import/no-named-as-default': 0,
        'import/prefer-default-export': 0,
    },
    env: {
        node: true,
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts'],
        },
        'import/resolver': {
            typescript: {
                directory: __dirname,
            },
        },
        'import/ignore': ['node_modules'],
    },
};
