import {gql} from 'overmind-graphql';

export const UserCreateM = gql`
  mutation userCreate($input: UserCreateInput!) {
    userCreate(input: $input) {
      user {
        username
        cellphone
      }
    }
  }
`;
