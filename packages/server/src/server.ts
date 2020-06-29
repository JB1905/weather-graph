import { ApolloServer } from 'apollo-server';
import { config } from 'dotenv';

config();

const server = new ApolloServer({
  modules: [
    require('./modules/current-weather'),
    require('./modules/forecast'),
    require('./modules/uv-index'),
  ],
  cors: {
    credentials: true,
    // origin: (origin, callback) => {
    //   const whitelist = [
    //     // "http://site1.com"
    //   ];

    //   if (whitelist.indexOf(origin) !== -1) {
    //     callback(null, true)
    //   } else {
    //     callback(new Error("Not allowed by CORS"))
    //   }
    // }
  },
});

server.listen().then(({ url }: { url: string }) => {
  console.log(`Server is running: ${url}`);
});
