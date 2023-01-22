import { gql } from 'overmind-graphql'

export const GET_USERS = gql`
  query getUsers{
    users {
      data {
        id
        email
        name
        phone
        username
        website
      }
    }
  }
`

export const GET_SINGLE_USER = gql`
  query getSingleUser($userId: ID!) {
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
  query getProfile($userId: ID!) {
    user(id: $userId) {
      id
      email
      name
      phone
      username
      website
    }
  }
`
