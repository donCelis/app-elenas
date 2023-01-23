import {gql, Query} from 'overmind-graphql';
import {users} from './graphql-types/users';
import {user, userVariables} from './graphql-types/user';

export const UsersQ: Query<users> = gql`
  query users {
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
`;

export const UserQ: Query<user, userVariables> = gql`
  query user($userId: ID!) {
    user(id: $userId) {
      id
      email
      name
      phone
      username
      website
    }
  }
`;
