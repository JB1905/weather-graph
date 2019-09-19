const { ApolloServer } = require('apollo-server');
require('dotenv').config();

const server = new ApolloServer({
  modules: [require('./modules/current-forecast')]
});

server.listen().then(({ url }) => {
  console.log(`Server is running: ${url}`);
});
