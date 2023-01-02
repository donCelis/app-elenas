import { gql } from 'overmind-graphql'

export const GET_USERS = gql`
  query ($options: PageQueryOptions) {
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
  query ($userId: ID!){
    user(id: $userId) {
      id
      email
      name
      phone
      username
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
