import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next'],
    rules: {
      '@next/next/no-img-element': 'off',         // ✅ disables <img /> warning
      '@next/next/no-page-custom-font': 'off',    // optional
      'react/no-unescaped-entities': 'off',       // optional
    },
  }),
];
