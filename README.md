# nextjs-boiler-plate

## Stack

- Next
- TS 
- Playwright e2e testing
- React testing library + jest for unit and integration test
- Env with typing 
- Chakra UI
- Next-i18next for internationalization ( + hmr on translation udpate )
- Husky pre-commit and pre-push tsc/lint/test validation
- Hookstate as a store with redux devtool
- Translation component
- Preview.js to preview your components
- Snippets 
- Script for component/story/test creation 

## Getting started

### Run in dev mode

```shell
yarn && yarn dev
```

### Build

```shell
yarn && yarn build
```

### Run Build

```shell
yarn && yarn start
```

###  Storybook

```shell
yarn && yarn storybook
```

## Preview components live

Install preview.js plugin.

## Generate components/page

```shell
 yarn run g component SomeComponentName
```

```shell
 yarn run g page SomePageName
```
## Snippets

See typescriptreact.snippet.json



## Tests

### E2E

```shell
yarn test:e2e
```

Debug mode

Unix 

type : PWDEBUG=1 before launching the test

Windows 

type : $env:PWDEBUG=1 before launching the test

### Unit testing

```shell
yarn test:unit
```

## Env

To type it /typings/env.d.ts

```js
// Make a server side env variable 
API_URL=https://62d43e44cd960e45d4557eaa.mockapi.io/sandbox
// Make a client side env variable 
NEXT_PUBLIC_OTHER_VAR=hello
```

## Husky  Commit - Push

Pre commit : Check tsc error, fix lint error , if any error prevent the commit
Pre push : Run unit tests with react testing library

## Chose the relevant rendering method 

### CSR (Client-side rendering)

You don't need SEO, or the page is private (example : User profile page)

### SSR  (Server-side rendering)

You want SEO but you need the user to make a request, or have fresh data to display the page. 

### SGR (Static generation rendering)

You want SEO and can preload all the data at build time before any user request ( A static splash screen page that does not change for example )

 

 ## Troublehsooting

 Can push or commit with git desktop

 https://github.com/desktop/desktop/issues/10999#issuecomment-866353129