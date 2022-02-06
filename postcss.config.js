//postcss.config.js
const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
        "postcss-flexbugs-fixes",
        [
          "postcss-preset-env",
          {
            "autoprefixer": {
              "flexbox": "no-2009",
              "grid": "autoplace"
            },
            "stage": 3,
            "features": {
              "custom-properties": false,
            }}]]}