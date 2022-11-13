import { gql } from '@apollo/client'

export const GET_PROFILE = gql`
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

export const GET_USERS = gql`
  query ($ids: [Int!]) {
    clientsSearch(ids: $ids) {
      results {
        id
        firstName
        lastName
        city
      }
    }
  }
`
