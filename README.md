# Luma FE Workspace

This project was generated using [Nx](https://nx.dev) with version `13.7.1`.

This project encompasses the Luma's React applications.

## Getting Started

Suggested node version would be `16`.

1. `npm i` - Install dependencies

2. Setup your local env by taking a look at `.env.dev` and creating a local copy at `.env.local` and update env variables properly.

3. Run App:

   - `npm run start-local` - Start dev server with local env variables
     - Read [here](#environment-variables) for more info
   - `npm run start-deployed` - Start dev server with deployed env variables
   - `npm start` - Start development server

4. `http://localhost:4200` - Application served at location

## Directory Structure

We have two main concepts `apps` and `libs`. Starting with `apps`, these are the applications that are built and deployed. Each application should be responsible for that domain. An example can be having two applications where one would be deployed at https://app.lumafintech.com/ and the other be https://admin.lumafintech.com/. These two applications would be both build and deployed. Thus these apps should control the routing logic. Leaving most of the actual coding of the products inside `libs`.

`libs` are shared libraries and application products/features. Shared libraries can be things like a common `design-system` or `common functions`. Libraries are not served, but used inside applications. Development of libraries would be done with `storybook` if they are component based or `jest` if they are outside the context of React.

Example: Given that we have an `app` with name `luma`, we can have multiple products that separate teams would be working on. At the start of this repository we have `luma/secondaries` which is the secondaries platform. If we were to add another product, lets say `creation-hub` then this would live as a sibling of `secondaries` at `luma/creation-hub` but share the `design-system` and `common functions`.

## Storybook

## Code Generation

This project was created with Nx so use the Nx CLI to create new applications and libraries.

[Nx CLI - React](https://nx.dev/react/overview)

To run this codegen script - "npx @rtk-query/codegen-openapi" you must add the path to the service-config.ts file, like so - libs/redux/src/redux/productService/productService-config.ts

### Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application. For a preview of the generated code add the `--dry-run` flag.

When using Nx, you can create multiple applications and libraries in the same workspace.

### Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library. For a preview of the generated code add the `--dry-run` flag.

Libraries are shareable across libraries and applications. They can be imported from `@luma-fe-workspace/mylib`.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Environment Variables

Environment variables can be stored in a `.env` file in the main workspace directory or in the `apps/luma/` directory. All environment variables must be prefixed with `NX_` for example `NX_API_URL`. For more information on custom and local `.env` files and the overall priority visit [NX Environment Variables](https://nx.dev/guides/environment-variables)

You will have to set up local environment variables to run npm run start-local. Create a .env.local file in the root directory (like so, /luma-fe-workspace/.env.local) and add the following variables:

```
NX_IS_LOCAL=true
NX_API_URL=https://scg.bdev.lumafintech.com/api
NX_OAUTH_CLIENT_ID=boston
NX_REDUX_DEV_TOOLS=true
NX_CHECK_ACCESSIBILITY=true
```

## Design System

The Design System is a publishable library within our NX workspace that houses all reusable, composable components and styles for use across the workspace and the rest of the luma ecosystem. We can make use of this library in two ways:

1. Internally within this NX workspace, using `import { colors } from '@luma-fe-workspace/design-system'`
2. In other repositories, by adding `@luma/design-system` to the package.json dependencies, and ensuring that installation from the private AWS CodeArtifact registry is possible (see the `aws:login` command in the [package.json](package.json))
   1. Install AWS cli if not already from this [link](https://aws.amazon.com/cli/)
   2. Run `aws configure` once installed, enter your AWS access and secret key
   3. Add a `[luma]` profile with the same credentials. More info [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)
   4. See the [Design Systems README.md](/libs/design-system/README.md) for more information

Locally, the Design System library can be built using `npm run build:design-system`, which produces a build artifact at `dist/libs/design-system`.

Alternatively, you can use `npm run dev:design-system`, which watches for changes and rebuilds the dist when changes are made to the source files.

### Integrated Local Development

To develop the `@luma/design-system` npm module live within an application (e.g. the Angular Lum App) that uses it as a dependency:

1. Run a build of the design system using either of the commands above
1. Run the command `npm run link:design-system`, which links the module (as well as `react` and `react-dom` due to a react instancing issue, see the [link-design-system script](/tools/scripts/link-design-system.sh) for more detail)
1. In the application that uses the `@luma/design-system` module, run `npm link @luma/design-system react react-dom`

### Publishing

The `@luma/design-system` package is published to an AWS CodeArtifact registry.

As you make changes to the library, you can update the version set in the library's [package.json](/libs/design-system/package.json). When publishing, the version from the package.json will be read in and define the package version. If you try to run a build without updating the package.json version, publishing will not succeed.

To publish the package, tag the commit that you'd like to publish, matching the pattern `design-system-release-*`:

1. `git tag design-system-release-v<version number>`
1. `git push --tags`

Keep in mind that we usually want to wait to publish until changes that constitute a version update have been merged - and then Drone can sometimes miss the trigger for tag pushes if a pipeline is actively running for that commit. Best to wait until any existing pipelines for the commit have completed to push the new release tag.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
