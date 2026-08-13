import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "18.0",
      },
    },
    rules: {
      // 1. Unused Variables (TypeScript-aware)
      "no-unused-vars": "off", // Turn off base rule to avoid duplicate/conflicting errors
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      // 2. Prevent Unused Expressions (e.g., `x + 1;` without assignment)
      "@typescript-eslint/no-unused-expressions": "warn",

      // 3. Flag `console.log` statements (permits console.warn and console.error)
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // 4. Force strict equality checks (=== and !== instead of == and !=)
      eqeqeq: ["error", "always"],

      // 5. Prefer `const` over `let` when variables are never reassigned
      "prefer-const": "warn",

      // 6. Prevent assigning values in conditional statements (e.g., if (x = 10))
      "no-cond-assign": ["error", "always"],

      // 7. React: Ensure JSX is used in React Scope (Not required for React 17+, turn off if using React 17+)
      "react/react-in-jsx-scope": "off",
    },
  },
]);
