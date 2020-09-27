import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import cors from 'cors';
import resolvers from './resolvers';

const createApp = async (): Promise<express.Application> => {
  const app = express();
  app.use('*', cors());
  const server = new ApolloServer({
    schema: await buildSchema({ resolvers }),
    context: ({ req, res }) => ({ req, res }),
  });
  server.applyMiddleware({ app, path: '/graphql' });
  return app;
};

export default createApp;
