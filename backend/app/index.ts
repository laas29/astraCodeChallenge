import http from "http";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginCacheControl } from "apollo-server-core";
import Schema from "./Schema";
import Resolvers from "./Resolvers";

async function init(schema: any, resolvers: any) {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs: schema,
        resolvers,
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            ApolloServerPluginCacheControl({
                defaultMaxAge: 5,
                calculateHttpHeaders: false,
            }),
        ]
    });
    await server.start();
    server.applyMiddleware({ app });
    await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve))

    console.log(`Apollo server running at http://localhost:4000${server.graphqlPath}`);
}

init(Schema, Resolvers);