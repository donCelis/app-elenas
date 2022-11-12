import { gql } from '@apollo/client'

export const GET_USERS = gql`
  query {
    users {
      age
      bloodGroup
      email
      eyeColor
      firstName
      hair {
        color
        type
      }
      id
      image
      lastName
      phone
      username
    }
  }
`
