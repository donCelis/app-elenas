/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface AddressInput {
  street?: string | null;
  suite?: string | null;
  city?: string | null;
  zipcode?: string | null;
  geo?: GeoInput | null;
}

export interface CompanyInput {
  name?: string | null;
  catchPhrase?: string | null;
  bs?: string | null;
}

export interface CreateUserInput {
  name: string;
  username: string;
  email: string;
  address?: AddressInput | null;
  phone?: string | null;
  website?: string | null;
  company?: CompanyInput | null;
}

export interface GeoInput {
  lat?: number | null;
  lng?: number | null;
}

export interface UpdateUserInput {
  name?: string | null;
  username?: string | null;
  email?: string | null;
  address?: AddressInput | null;
  phone?: string | null;
  website?: string | null;
  company?: CompanyInput | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
