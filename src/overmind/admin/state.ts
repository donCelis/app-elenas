export type Profile = {
  id: string;
  cellphone: string;
  username: string;
};

export type AdminType = {
  user: {
    id: string;
    profile: Profile;
  } | null;
};

export const state: AdminType = {
  user: null,
};
