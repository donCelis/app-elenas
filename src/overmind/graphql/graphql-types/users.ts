/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: users
// ====================================================

export interface users_users_data {
  id: string | null;
  email: string | null;
  name: string | null;
  phone: string | null;
  username: string | null;
  website: string | null;
}

export interface users_users {
  data: (users_users_data | null)[] | null;
}

export interface users {
  users: users_users | null;
}
