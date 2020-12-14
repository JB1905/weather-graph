import { ApolloServer } from 'apollo-server';
import { config } from 'dotenv';

config();

const server = new ApolloServer({
  modules: [
    // require('./modules/cities'),
    require('./modules/current-weather'),
    require('./modules/forecast'),
    // require('./modules/pollution'),
    require('./modules/uv-index'),
  ],
  // cors: {
  //   credentials: true,
  //   origin: (origin, callback) => {
  //     const allowlist = [process.env.CLIENT_ORIGIN];

  //     if (allowlist.indexOf(origin) !== -1) {
  //       callback(null, true);
  //     } else {
  //       callback(new Error('Not allowed by CORS'));
  //     }
  //   },
  // },
  engine: {
    reportSchema: true,
  },
});

server.listen().then(({ url }: { readonly url: string }) => {
  console.log(`Server is running: ${url}`);
});
