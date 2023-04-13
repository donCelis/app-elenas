import {gql, Query} from 'overmind-graphql';
import {userCollection} from './graphql-types/userCollection';

export const UsersQ: Query<userCollection> = gql`
  query userCollection {
    userCollection(first: 10) {
      edges {
        node {
          cellphone
          username
          id
        }
      }
    }
  }
`;

export const UserQ = gql`
  query user {
    user(by: {id: "user_01GRMKJ759WY2N1WZ2QV04WBV2"}) {
      cellphone
      username
      id
    }
  }
`;
