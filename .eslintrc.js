module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    mocha: true,
  },
  plugins: [
    'mocha',
  ],
  extends: [
    'airbnb-base',
    'plugin:mocha/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'prefer-arrow-callback': 'off',
    'func-names': 'off',
    'no-unused-expressions': 'off',
  },
};
