# redux

Luma's Redux store contains our application's UI state as well the data from APIs through API slices. It is important to keep that distinction

## Structure

Application slices pertain to UI state associated with a particular products UI.

API slices pertain to a specific micro-service.

## Swagger

API slices that can leverage Swagger documentation from a particular micro-service should. There are [codegen tools](https://redux-toolkit.js.org/rtk-query/usage/code-generation) to help create these API interfaces for you.

## Running unit tests

Run `nx test redux` to execute the unit tests via [Jest](https://jestjs.io).
