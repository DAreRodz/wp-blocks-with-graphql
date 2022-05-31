# WP Blocks with GraphQL

This repository explores a possible aproximation on how to use GraphQL within blocks. The intention of unify and simplify database access from both the server and the client (the editor, in this case).

It consists of three blocks:
- One parent block that request a query.
- Two children blocks that use fragments to extend the parent's query.

This experiment has the following dependencies:

- [WPGraphQL](https://www.wpgraphql.com/docs/introduction/)
- [@apollo/client](https://www.apollographql.com/docs/react/)


## Set up

Install NPM dependencies.

```bash
npm install
```
Install the WPGraphQL plugin.

```bash
npx wp-env run cli wp plugin install wpgraphql
```

Start the project.

```bash
npx wp-env start
npm start
```
