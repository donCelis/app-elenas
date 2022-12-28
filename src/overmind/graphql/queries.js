import { gql } from 'overmind-graphql'

export const GET_USERS = gql`
  query Query($options: PageQueryOptions) {
    users(options: $options) {
      data {
        id
        email
        name
        phone
        username
      }
    }
  }
`

export const GET_SINGLE_USER = gql`
  query ($ids: [Int!]) {
    clientsSearch(ids: $ids) {
      results {
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

export const GET_PROFILE = gql`
  query {
    profile {
      firstName
      lastName
      id
      cellphone
      email
      cedula
      registerDate
      address {
        city
      }
    }
  }
`
