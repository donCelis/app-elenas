/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserAdminByInput } from "./../../../../graphql-types/graphql-global-types";

// ====================================================
// GraphQL query operation: UserAdmin
// ====================================================

export interface UserAdmin_userAdmin_profile {
  /**
   * Unique identifier
   */
  id: string;
  cellphone: string;
  username: string;
}

export interface UserAdmin_userAdmin {
  /**
   * Unique identifier
   */
  id: string;
  profile: UserAdmin_userAdmin_profile;
}

export interface UserAdmin {
  /**
   * Query a single UserAdmin by an ID or a unique field
   */
  userAdmin: UserAdmin_userAdmin | null;
}

export interface UserAdminVariables {
  userAdminBy: UserAdminByInput;
}
