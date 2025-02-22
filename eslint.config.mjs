import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", {
    extends: ["next", "prettier"],
  }),
  {
    rules: {
      "no-console": ["error", { allow: ["warn", "error", "info", "debug"] }],
      "react/jsx-uses-vars": "error",
    },
  },
];

export default eslintConfig;
