module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".vue"],
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:vue/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  env: {
    browser: true,
    es2020: true,
    jest: true,
    mocha: true,
    node: true,
  },
  globals: {
    plus: "readonly",
    uni: "readonly",
    weex: "readonly",
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-console":
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "pre-production" ||
      process.env.NODE_ENV === "staging"
        ? "warn"
        : "off",
    "no-debugger":
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "pre-production" ||
      process.env.NODE_ENV === "staging"
        ? "warn"
        : "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars":
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "pre-production" ||
      process.env.NODE_ENV === "staging"
        ? "warn"
        : "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": "off"
      }
    },
    {
      files: ["shims-tsx.d.ts"],
      rules: {
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
};
