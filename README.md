# WP Blocks with GraphQL

This repository explores a possible aproximation on how to use GraphQL within blocks. The intention of unify and simplify database access from both the server and the client (the editor, in this case).

It consists of three blocks:
- One parent block that request a query.
- Two children blocks that use fragments to extend the parent's query.

This experiment has the following dependencies:

- [WPGraphQL](https://www.wpgraphql.com/docs/introduction/)
- [@apollo/client](https://www.apollographql.com/docs/react/)


## Set up

Install dependencies

```bash
npm install
npx wp-env run cli wp plugin install wpgraphql
```
Start the project

```bash
npm start
```


## How it works

Despite its apparent simplicity,


## Some considerations

- Not clear how to integrate with TypeScript
