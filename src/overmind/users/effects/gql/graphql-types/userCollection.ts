/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: userCollection
// ====================================================

export interface userCollection_userCollection_edges_node {
  cellphone: string;
  username: string;
  /**
   * Unique identifier
   */
  id: string;
}

export interface userCollection_userCollection_edges {
  node: userCollection_userCollection_edges_node;
}

export interface userCollection_userCollection {
  edges: (userCollection_userCollection_edges | null)[] | null;
}

export interface userCollection {
  /**
   * Paginated query to fetch the whole list of `User`.
   */
  userCollection: userCollection_userCollection | null;
}
