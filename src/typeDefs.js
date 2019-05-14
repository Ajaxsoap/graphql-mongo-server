import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Query {
        hello: String!
        allCats: [Cat!]!
        allDogs: [Dog!]!
    }
    type Cat {
        id: ID!
        name: String!
    }
    type Dog {
        id: ID!
        name: String!
        breed: String!
    }
    type Mutation {
        createCat(name: String!): Cat!
        createDog(name: String!, breed: String!): Dog!
        removeCat(id: String!): Cat
    }
`;