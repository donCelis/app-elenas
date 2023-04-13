/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserCreateInput } from "./../../../../graphql-types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: userCreate
// ====================================================

export interface userCreate_userCreate_user {
  username: string;
  cellphone: string;
}

export interface userCreate_userCreate {
  user: userCreate_userCreate_user | null;
}

export interface userCreate {
  /**
   * Create a User
   */
  userCreate: userCreate_userCreate | null;
}

export interface userCreateVariables {
  input: UserCreateInput;
}
