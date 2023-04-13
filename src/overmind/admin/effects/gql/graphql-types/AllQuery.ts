/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserAdminByInput, UserByInput } from "./../../../../graphql-types/graphql-global-types";

// ====================================================
// GraphQL query operation: AllQuery
// ====================================================

export interface AllQuery_userAdmin_profile {
  /**
   * Unique identifier
   */
  id: string;
  cellphone: string;
  username: string;
}

export interface AllQuery_userAdmin {
  /**
   * Unique identifier
   */
  id: string;
  profile: AllQuery_userAdmin_profile;
}

export interface AllQuery_userCollection_edges_node {
  /**
   * Unique identifier
   */
  id: string;
  cellphone: string;
  username: string;
}

export interface AllQuery_userCollection_edges {
  node: AllQuery_userCollection_edges_node;
}

export interface AllQuery_userCollection {
  edges: (AllQuery_userCollection_edges | null)[] | null;
}

export interface AllQuery_user {
  /**
   * Unique identifier
   */
  id: string;
  cellphone: string;
  username: string;
}

export interface AllQuery {
  /**
   * Query a single UserAdmin by an ID or a unique field
   */
  userAdmin: AllQuery_userAdmin | null;
  /**
   * Paginated query to fetch the whole list of `User`.
   */
  userCollection: AllQuery_userCollection | null;
  /**
   * Query a single User by an ID or a unique field
   */
  user: AllQuery_user | null;
}

export interface AllQueryVariables {
  byAdmin: UserAdminByInput;
  first?: number | null;
  byUser: UserByInput;
}
