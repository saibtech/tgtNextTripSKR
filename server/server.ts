import { ApolloServer } from "apollo-server"
import * as path from "path"
import "reflect-metadata"
import { buildSchema } from "type-graphql"
import Routes from './routes=service'
import { DepartureStopsResolver, DirectionResolver, RoutesResolver, StopsResolver } from "./trip-resolver"

export type Datasources = {
  routes: Routes
}
export const getDataSources = (): Datasources => ({
  routes: new Routes(),
})

async function bootstrap() {
  // build TypeGraphQL executable schema
  const schema = await buildSchema({
    resolvers: [RoutesResolver, DirectionResolver, StopsResolver, DepartureStopsResolver],
    dateScalarMode: "timestamp",
    // automatically create `schema.gql` file with schema definition in current folder
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    nullableByDefault: true
  })

  // Create GraphQL server
  const server = new ApolloServer({
    schema,
    // enable GraphQL Playground
    playground: true,
    dataSources: getDataSources
  })

  // Start the server
  const { url } = await server.listen(4000)
  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

bootstrap()
