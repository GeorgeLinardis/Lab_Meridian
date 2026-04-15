import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // TypeScript
      "@typescript-eslint/no-unused-vars": ["error", { vars: "all", args: "all", ignoreRestSiblings: false }],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],

      // General quality
      "no-console": "error",
      "eqeqeq": ["error", "always"],
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",

      // React
      "react/self-closing-comp": "error",
      "react/jsx-no-useless-fragment": "error",
    },
  },
  {
    // Typed rules — only applies to src TypeScript files
    files: ["src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-floating-promises": "error",
    },
  },
  {
    // shadcn-generated UI components — relax no-shadow
    files: ["src/components/ui/**/*.tsx"],
    rules: {
      "@typescript-eslint/no-shadow": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
