//Esse arquivo serve para limitar o que será consumido na API em GraphQL
//Query: busca dados
//Mutation: modifica dados

import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    links: [Link]
  }

  type Link {
    id: ID
    title: String
    url: String
  }
`;
