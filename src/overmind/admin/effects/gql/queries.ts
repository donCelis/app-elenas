import {gql, Query} from 'overmind-graphql';
import {AllQuery, AllQueryVariables} from './graphql-types/AllQuery';

/* type GlobalTypes = {
  UserAdmin: UserAdmin;
  UserCollection: UserCollection;
  User: User;
};

type GlobalVariables = {
  UserAdminVariables: UserAdminVariables;
  UserCollectionVariables: UserCollectionVariables;
  UserVariables: UserVariables;
}; */

export const USER_DETAILS_FRAGMENT = gql`
  fragment UserDetails on User {
    id
    cellphone
    username
  }
`;

export const UserAdminQ: Query<AllQuery, AllQueryVariables> = gql`
  query AllQuery(
    $byAdmin: UserAdminByInput!
    $first: Int
    $byUser: UserByInput!
  ) {
    userAdmin(by: $byAdmin) {
      id
      profile {
        ...UserDetails
      }
    }
    userCollection(first: $first) {
      edges {
        node {
          ...UserDetails
        }
      }
    }
    user(by: $byUser) {
      ...UserDetails
    }
  }
  ${USER_DETAILS_FRAGMENT}
`;
