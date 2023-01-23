/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateUserInput } from "./../../graphql-types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: createUser
// ====================================================

export interface createUser_createUser {
  username: string | null;
  name: string | null;
  email: string | null;
  phone: string | null;
  id: string | null;
}

export interface createUser {
  createUser: createUser_createUser | null;
}

export interface createUserVariables {
  input: CreateUserInput;
}
