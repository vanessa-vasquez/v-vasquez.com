/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  rules: {
    "selector-class-pattern": /^[a-z][a-zA-Z0-9]+$/,
    "media-feature-range-notation": "prefix",
    "order/properties-alphabetical-order": true,
    "keyframes-name-pattern": /^[a-z][a-zA-Z0-9]+$/,
  },
};
