module.export = {
  "extends": ["airbnb", "prettier", "prettier/react"],
  "plugins": ["prettier"],
  "rules": {
  "react/jsx-filename-extension": [
    1,
    {
      "extensions": [".js", ".jsx"]
    }
  ],
    "react/prop-types": 0,
    "no-underscore-dangle": 0,
    "import/imports-first": ["error", "absolute-first"],
    "import/newline-after-import": "error",
    "jsx-a11y/label-has-for": "off"
},
  "globals": {
  "window": true,
    "document": true,
    "localStorage": true,
    "FormData": true,
    "FileReader": true,
    "Blob": true,
    "navigator": true
},
  "parser": "babel-eslint",
  "overrides": [
  {
    "files": [
      "**/*.test.js"
    ],
    "env": {
      "jest": true // now **/*.test.js files' env has both es6 *and* jest
    },
    // Can't extend in overrides: https://github.com/eslint/eslint/issues/8813
    //"extends": ["plugin:jest/recommended"]
    "plugins": ["jest"],
    "rules": {
      "jest/no-alias-methods": "warn",
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/no-jasmine-globals": "warn",
      "jest/no-jest-import": "warn",
      "jest/no-test-prefixes": "warn",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-describe": "error",
      "jest/valid-expect": "error",
      "jest/valid-expect-in-promise": "error"
    }
  }
]
};