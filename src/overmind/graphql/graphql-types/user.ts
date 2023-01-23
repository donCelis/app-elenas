/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: user
// ====================================================

export interface user_user {
  id: string | null;
  email: string | null;
  name: string | null;
  phone: string | null;
  username: string | null;
  website: string | null;
}

export interface user {
  user: user_user | null;
}

export interface userVariables {
  userId: string;
}
