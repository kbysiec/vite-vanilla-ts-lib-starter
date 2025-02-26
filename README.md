# vite-vanilla-ts-lib-starter

The starter is built on top of Vite 6.x and prepared for writing libraries in TypeScript. It generates a package with support for ESM modules and IIFE.

## Features

- ESM modules
- IIFE bundle for direct browser support without bundler
- Typings bundle
- ESLint - scripts linter
- Stylelint - styles linter
- Prettier - formatter
- Vitest - test framework
- Husky + lint-staged - pre-commit git hook set up for formatting

## GitHub Template

This is a template repo. Click the green [Use this template](https://github.com/kbysiec/vite-vanilla-ts-lib-starter/generate) button to get started.

## Clone to local

If you prefer to do it manually with the cleaner git history

```bash
git clone https://github.com/kbysiec/vite-vanilla-ts-lib-starter.git
cd vite-vanilla-ts-lib-starter
npm i
```

## Checklist

When you use this template, update the following:

- Remove `.git` directory and run `git init` to clean up the history
- Change the name in `package.json` - it will be the name of the IIFE bundle global variable and bundle files name (`.cjs`, `.mjs`, `.iife.js`, `d.ts`)
- Change the author name in `LICENSE`
- Clean up the `README` and `CHANGELOG` files

And, enjoy 😊

## Usage

The starter contains the following scripts:

- `dev` - starts dev server
- `build` - generates the following bundles: ESM (`.js`) and IIFE (`.iife.js`). The name of bundle is automatically taken from `package.json` name property
- `test` - starts vitest and runs all tests
- `test:coverage` - starts vitest and run all tests with code coverage report
- `lint:scripts` - lint `.ts` files with eslint
- `lint:styles` - lint `.css` and `.scss` files with stylelint
- `format:scripts` - format `.ts`, `.html` and `.json` files with prettier
- `format:styles` - format `.cs` and `.scss` files with stylelint
- `format` - format all with prettier and stylelint
- `prepare` - script for setting up husky pre-commit hook
- `uninstall-husky` - script for removing husky from repository

## Acknowledgment

If you found it useful somehow, I would be grateful if you could leave a star in the project's GitHub repository.

Thank you.
