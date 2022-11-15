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
  mutation ($updateClientId: Int!, $updateClientInput: ClientInput!) {
    updateClient(id: $updateClientId, input: $updateClientInput) {
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
export const ADD_USER = gql`
  mutation ($createClientInput: ClientInput!) {
    createClient(input: $createClientInput) {
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
      ... on ValidationErrors {
        message
        errors {
          message
          field
        }
      }
    }
  }
`
