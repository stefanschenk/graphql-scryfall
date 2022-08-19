import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServer, gql } from 'apollo-server-express';
import Keyv from 'keyv';
import { KeyvAdapter } from '@apollo/utils.keyvadapter';
import { serverConfig } from '../etc/config';
import { dataSources } from './datasources';
import { resolvers } from './resolvers/resolvers';
import responseCachePlugin from 'apollo-server-plugin-response-cache';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  #  directive @cacheControl(maxAge: Int, scope: CacheControlScope) on OBJECT | FIELD | FIELD_DEFINITION
  #  enum CacheControlScope {
  #    PUBLIC
  #    PRIVATE
  #  }

  type Query {
    catalogLandTypes: CatalogLandTypes
  }

  type CatalogLandTypes {
    object: String
    uri: String
    total_values: String
    data: [String]
  }
`;

const {
  redis: { host, port },
} = serverConfig;

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: new KeyvAdapter(new Keyv(`redis://${host}:${port}`, { adapter: 'redis', namespace: 'graphql' }), {
    disableBatchReads: true,
  }),
  dataSources,
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});
//responseCachePlugin()
