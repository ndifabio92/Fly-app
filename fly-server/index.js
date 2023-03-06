
import * as dotenv from 'dotenv';
import startApolloServer from './app.js'
import './database/connection.js';

import typeDefs from "./graphql/types/typeDefs.js";
import resolvers from "./graphql/resolvers/resolvers.js";

dotenv.config();

startApolloServer(typeDefs, resolvers);