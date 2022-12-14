export const schema = gql`
  type User {
    id: Int!
    email: String!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    email: String!
  }

  input UpdateUserInput {
    email: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
  }
`
