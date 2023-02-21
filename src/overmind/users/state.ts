export type User = {
  id: string;
  cellphone: string;
  username: string;
} | null;

export type State = {
  userList: User[] | null;
};

export const state: State = {
  userList: [],
};
