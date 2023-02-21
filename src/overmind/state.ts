type State = {
  loading: boolean;
  currentUser: {
    id: string;
    cellphone: string;
    username: string;
  } | null;
};

export const state: State = {
  loading: true,
  currentUser: null,
};
