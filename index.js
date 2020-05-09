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
    uni: "readonly",
    plus: "readonly",
  },
  rules: {
    // for projects developing
    "@typescript-eslint/explicit-function-return-type": "off",
    // override eslint-config-standard and follow prettier default options
    "comma-dangle": ["error", "always-multiline"],
    // for projects developing
    "no-console":
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "pre-production" ||
      process.env.NODE_ENV === "staging"
        ? "warn"
        : "off",
    // for projects developing
    "no-debugger":
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "pre-production" ||
      process.env.NODE_ENV === "staging"
        ? "warn"
        : "off",
    // for projects developing
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars":
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "pre-production" ||
      process.env.NODE_ENV === "staging"
        ? "warn"
        : "off",
    // override eslint-config-standard and follow prettier default options
    quotes: "off",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      { allowTemplateLiterals: false },
    ],
    // override eslint-config-standard and follow prettier default options
    semi: "off",
    "@typescript-eslint/semi": ["error", "always"],
    // override eslint-config-standard and follow prettier default options
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always",
      },
    ],
  },
  overrides: [
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
