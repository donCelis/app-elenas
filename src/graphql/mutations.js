import { gql } from 'apollo-boost'

export const LOGIN = gql`
  mutation Login {
  login(cellphone: "+573208335263", password: "123456") {
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
