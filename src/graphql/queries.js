import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query {
    clientsSearch {
      results {
        id
        address
        addressIndications
        cedula
        cellphone
        city
        colony
        credit
        delegation
        extraAddress
        firstName
        innerNumber
        isSeller
        is_range
        lastName
        logisticProvider
        neighborhood
        outsideNumber
        registerDate
        updatedAddress
        zipCode
        state {
          displayName
        }
      }
    }
  }
`
