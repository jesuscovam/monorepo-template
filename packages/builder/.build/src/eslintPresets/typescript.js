module.exports = {
    env: {
        es2021: true,
        node: true
    },
    "extends": ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        indent: ['error', 'tab'],
        quotes: ['error', 'single'],
        semi: ['error', 'never']
    }
};