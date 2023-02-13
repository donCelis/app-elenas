/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserCollection
// ====================================================

export interface UserCollection_userCollection_edges_node {
  cellphone: string;
  /**
   * Unique identifier
   */
  id: string;
  username: string;
}

export interface UserCollection_userCollection_edges {
  node: UserCollection_userCollection_edges_node;
}

export interface UserCollection_userCollection {
  edges: (UserCollection_userCollection_edges | null)[] | null;
}

export interface UserCollection {
  /**
   * Paginated query to fetch the whole list of `User`.
   */
  userCollection: UserCollection_userCollection | null;
}

export interface UserCollectionVariables {
  first?: number | null;
}
