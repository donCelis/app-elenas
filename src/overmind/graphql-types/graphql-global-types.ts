/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface UserAdminByInput {
  id?: string | null;
}

export interface UserByInput {
  cellphone?: string | null;
  id?: string | null;
  username?: string | null;
}

/**
 * Input to create a User
 */
export interface UserCreateInput {
  avatarUrl?: string | null;
  cellphone: string;
  email?: string | null;
  fullName?: string | null;
  isFav?: boolean | null;
  username: string;
  website?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
