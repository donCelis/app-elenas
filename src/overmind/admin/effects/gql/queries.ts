import {gql, Query} from 'overmind-graphql';
import {UserAdmin, UserAdminVariables} from './graphql-types/userAdmin';
import {
  UserCollection,
  UserCollectionVariables,
} from './graphql-types/UserCollection';
import {User, UserVariables} from './graphql-types/User';

type GlobalTypes = {
  UserAdmin: UserAdmin;
  UserCollection: UserCollection;
  User: User;
};

type GlobalVariables = {
  UserAdminVariables: UserAdminVariables;
  UserCollectionVariables: UserCollectionVariables;
  UserVariables: UserVariables;
};

export const UserAdminQ: Query<GlobalTypes, GlobalVariables> = gql`
  query UserAdmin($userAdminBy: UserAdminByInput!) {
    userAdmin(by: $userAdminBy) {
      id
      profile {
        id
        cellphone
        username
      }
    }
  }

  query UserCollection($first: Int) {
    userCollection(first: $first) {
      edges {
        node {
          cellphone
          id
          username
        }
      }
    }
  }

  query User($by: UserByInput!) {
    user(by: $by) {
      cellphone
      username
      id
    }
  }
`;
