export type User = {
  id: string | null;
  email: string | null;
  name: string | null;
  phone: string | null;
  username: string | null;
  website: string | null;
  isFav: boolean | null;
};

export type State = {
  userList: User[] | [];
};

export const state: State = {
  userList: [],
};
