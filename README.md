# DIY React

A ~~basic~~ fairly plain React Typescript project built from scratch with some tooling to get you by. `npm start` to see it in action.

## Note for Windows

If you're having trouble running the npm scripts in a Windows environment, it might be because you're using Command Prompt or Powershell. You most likely want to use the bash shell that comes with [Git for Windows](https://git-scm.com/downloads) instead. Use npm to set a bash shell for running scripts by running the following command:

```bash
npm config set script-shell "C:\\Program Files\\Git\\bin\\bash.exe"
```

## Guide

### Basics

```bash
npm run start       # builds dist dir (if needed) and serves
npm run start prod  # same as above but with a production build of React

npm run rebuild         # rebuilds dir to reflect code changes
npm run reserve [prod]  # does the above & re-serves

npm run lint[:src|:spec]  # tuns tslint on either the src dir, spec dir, or both

npm run test  # runs tests

npm run clean [dist|test|all] # will remove either the dist dir, test dir, or both
```

### Cache

The cache (`.cache/`) contains the most recent snapshots for any component snapshot testing. The npm scripts handle the loading/unloading of these snapshots in the necessary tests.

If you plan on using snapshots, then commit your cache.

## Resources

- [Webpack docs](https://webpack.js.org/guides/typescript/)
- [Typescript w/ Webpack & React](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)
- [Typescript Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)
- [ts-jest](https://kulshekhar.github.io/ts-jest/)
