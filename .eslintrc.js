module.exports = {
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {},
}
