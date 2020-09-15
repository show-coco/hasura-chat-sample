module.exports = {
  schema: [
    {
      [`${process.env.HASURA_GRAPHQL_ENDPOINT}`]: {
        // headers: {
        //   'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
        // },
      },
    },
  ],
  documents: [
    "./src/graphql/queries/*.graphql",
    "./src/graphql/mutations/*.graphql",
  ],
  overwrite: true,
  generates: {
    "./src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
