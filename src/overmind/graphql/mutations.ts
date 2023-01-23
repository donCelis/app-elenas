import {gql, Query} from 'overmind-graphql';
import type {createUser, createUserVariables} from './graphql-types/createUser';
import type {updateUser, updateUserVariables} from './graphql-types/updateUser';

export const CreateUserM: Query<createUser, createUserVariables> = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      username
      name
      email
      phone
      id
    }
  }
`;

export const UpdateUserM: Query<updateUser, updateUserVariables> = gql`
  mutation updateUser($updateUserId: ID!, $input: UpdateUserInput!) {
    updateUser(id: $updateUserId, input: $input) {
      id
      name
      phone
      username
    }
  }
`;
