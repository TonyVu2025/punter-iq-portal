// lib/graphqlClient.js
import { GraphQLClient } from 'graphql-request';

const endpoint = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`;

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
});

export default graphQLClient;
