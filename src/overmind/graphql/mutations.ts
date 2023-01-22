import { gql } from 'overmind-graphql'

export const UPDATE_CLIENT = gql`
  mutation updateClient ($updateUserId: ID!, $input: UpdateUserInput!) {
    updateUser(id: $updateUserId, input: $input) {
      id
      name
      phone
      username
    }
  }
`
export const ADD_USER = gql`
  mutation addUser ($input: CreateUserInput!) {
    createUser(input: $input) {
      username
      name
      email
      phone
      id
    }
  }
`
