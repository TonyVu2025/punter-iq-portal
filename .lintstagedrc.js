const path = require("path");

const buildEslintCommand = (filenames) =>
  `eslint --max-warnings=0 --fix ${filenames
    .map((file) => path.relative(process.cwd(), file))
    .join(" ")}`;

module.exports = {
  "app/**/!(*.{ts,tsx,js,jsx})": "prettier --write",
  "app/**/*.{js,jsx,ts,tsx}": [buildEslintCommand],
};
