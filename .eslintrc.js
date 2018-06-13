module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
	"rules": {
    "array-callback-return": "error",
    "indent": ["error", 4, {"SwitchCase": 1}],
    "block-spacing": "error",
    "brace-style": ["error", "1tbs"],
    "camelcase": ["error", { "properties": "never" }],
    "callback-return": ["error", ["cb", "callback", "next"]],
    "comma-spacing": "error",
    "comma-style": ["error", "last"],
    "consistent-return": "error",
    "curly": ["error", "all"],
    "default-case": "error",
    "dot-notation": ["error", { "allowKeywords": false }],
    "eol-last": "error",
    "eqeqeq": "error",
    "guard-for-in": "error",
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": "error",
    "lines-around-comment": ["error", {
        "beforeBlockComment": true,
        "afterBlockComment": false,
        "beforeLineComment": true,
        "afterLineComment": false
    }],
    "new-cap": "error",
    "newline-after-var": ["error", "never"],
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-invalid-this": "error",
    "no-multi-spaces": "error",
    "no-redeclare": "error",
    "no-return-assign": "error",
    "no-spaced-func": "error",
    "no-trailing-spaces": "error",
    "semi": "error",
    "semi-spacing": "error",
    "quotes":["error","double"],
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": ["error", {"words": true, "nonwords": false}],
    "spaced-comment": "error",
    "yoda": ["error", "never"],
    "no-mixed-requires": "error",
    "handle-callback-err": ["error", "err"]
  }
}
