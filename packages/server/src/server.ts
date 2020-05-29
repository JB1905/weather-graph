import { ApolloServer } from 'apollo-server';
import { config } from 'dotenv';

config();

const server = new ApolloServer({
  modules: [
    require('./modules/current-weather'),
    require('./modules/forecast'),
    require('./modules/uv-index'),
  ],
});

server.listen().then(({ url }: { url: string }) => {
  console.log(`Server is running: ${url}`);
});
