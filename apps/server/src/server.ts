import { ApolloServer } from 'apollo-server';
import { config } from 'dotenv';

config();

const server = new ApolloServer({
  modules: [
    require('./modules/current-weather'),
    require('./modules/forecast'),
    require('./modules/uv-index'),
  ],
  engine: {
    reportSchema: true,
  },
  introspection: true,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`Server is running: ${url}`);
});
