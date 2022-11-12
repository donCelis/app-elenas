import { gql } from '@apollo/client'

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
        user {
          id
          firstName
          lastName
          email
          cedula
          cellphone
        }
      }
    }
  }
`
