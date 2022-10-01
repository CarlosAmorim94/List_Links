import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

export const apollo = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BASEURL,
  cache: new InMemoryCache(),
});
