/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserByInput } from "./../../../../graphql-types/graphql-global-types";

// ====================================================
// GraphQL query operation: User
// ====================================================

export interface User_user {
  cellphone: string;
  username: string;
  /**
   * Unique identifier
   */
  id: string;
}

export interface User {
  /**
   * Query a single User by an ID or a unique field
   */
  user: User_user | null;
}

export interface UserVariables {
  by: UserByInput;
}
