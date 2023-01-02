import { gql } from 'overmind-graphql'

export const LOGIN_MUTATION = gql`
  mutation (
    $cellphone: String!
    $password: String!
    $useExpirationPolicy: Boolean
  ) {
    login(
      cellphone: $cellphone
      password: $password
      useExpirationPolicy: $useExpirationPolicy
    ) {
      ... on AuthInfo {
        token
      }
      ... on ValidationErrors {
        errors {
          message
          field
        }
      }
    }
  }
`
export const UPDATE_CLIENT = gql`
  mutation ($updateClientId: Int!, $updateClientInput: ClientInput!) {
    updateClient(id: $updateClientId, input: $updateClientInput) {
      ... on Client {
        id
      }
    }
  }
`
export const ADD_USER = gql`
  mutation ($input: CreateUserInput!) {
    createUser(input: $input) {
      username
      name
      email
      phone
      id
    }
  }
`
