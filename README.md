# Brady

## What's inside?

This Turborepo includes the following:

### Apps 

- `clients`: a [Next.js](https://nextjs.org/) app
- `providers`: another [Next.js](https://nextjs.org/) app

### Packages

- `@brady/ui`: a shared stub React component library
- `@brady/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@brady/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Utilities

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, please run the following command:

```
cd brady
pnpm turbo build
```

### Develop

To develop all apps and packages, please run the following command:

```
cd brady
pnpm turbo dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
