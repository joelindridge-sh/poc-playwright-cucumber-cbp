# poc-playwright-cbp

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A POC for using [Playwright](https://playwright.dev/docs/intro) via [playwright-bdd](https://github.com/vitalets/playwright-bdd) for the Corporate Broker Portal.

See also [poc-playwright-cbp](https://github.com/joelindridge-sh/poc-playwright-cbp).

## Installation

Requires [Node.js](https://nodejs.org/).

Dependencies can then be installed via the following command:

`npm i`

## VSCode

VSCode has a Playwright extension providing useful functionality such as running tests and picking locators.

### Extensions

Install:

- Playwright - `ms-playwright.playwright`
- Prettier - `esbenp.prettier-vscode` - code formatting

### Settings

Add the following file to the root of the project:

`.vscode/settings.json`

```JSON
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## Run Example Tests

### Phase 1:

Generate intermediate test files from BDD feature files.

`npx bddgen`

### Phase 2:

Run generated test files with Playwright runner.

Run in an interactive UI mode:
`npx playwright test --ui`

Run all - runs all of the tests in the command line:
`npx playwright test`

Run a tag - runs a subset of tests tagged in feature files:
`npx playwright test --grep "@ui"`

Run headed - runs tests in the browser:
`npx playwright test --grep "@ui" --headed`

### Phase 1 & 2 combined

Generate and then run - note, `&&` is only available using bash/cmd:

`npx bddgen && npx playwright test`
