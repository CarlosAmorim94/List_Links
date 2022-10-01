import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

const apollo = new ApolloClient({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  cache: new InMemoryCache(),
});

export default apollo;
