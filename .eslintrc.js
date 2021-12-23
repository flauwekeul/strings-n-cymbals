module.exports = {
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {},
}
