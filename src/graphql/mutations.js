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
export const UPDATE_CLIENT = gql`
  mutation ($input: ClientInput!, $updateClientId: Int!) {
    updateClient(input: $input, id: $updateClientId) {
      ... on Client {
        id
        registerDate
        firstName
        lastName
        cedula
        address
        innerNumber
        outsideNumber
        addressIndications
        is_range
        city
        cellphone
        credit
        isSeller
        neighborhood
        state {
          displayName
          id
          shortCode
        }
      }
    }
  }
`
