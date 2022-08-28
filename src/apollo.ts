import { KeyvAdapter } from '@apollo/utils.keyvadapter';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import responseCachePlugin from 'apollo-server-plugin-response-cache';
import Keyv from 'keyv';
import { serverConfig } from '../etc/config';
import { dataSources } from './datasources';
import resolvers from './resolvers';
import typeDefs from './schemas';

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
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true }), responseCachePlugin()],
});
