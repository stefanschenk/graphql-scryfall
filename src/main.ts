import express from 'express';
import http from 'http';
import { serverConfig } from '../etc/config';
import { apolloServer } from './apollo';

async function startApolloServer() {
  // Required logic for integrating with Express
  const app = express();
  // Our httpServer handles incoming requests to our Express app.
  // Below, we tell Apollo Server to "drain" this httpServer,
  // enabling our servers to shut down gracefully.
  const httpServer = http.createServer(app);

  const { port } = serverConfig;

  // More required logic for integrating with Express
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,

    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: '/graphql/data',
  });

  // Modified server startup
  await new Promise<void>(resolve => httpServer.listen({ port }, resolve));
  console.log(`🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`);
}

(async () => {
  await startApolloServer();
})();
