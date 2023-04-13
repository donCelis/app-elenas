/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: user
// ====================================================

export interface user_user {
  cellphone: string;
  username: string;
  /**
   * Unique identifier
   */
  id: string;
}

export interface user {
  /**
   * Query a single User by an ID or a unique field
   */
  user: user_user | null;
}
