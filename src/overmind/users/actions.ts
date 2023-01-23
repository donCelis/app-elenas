import {Context} from '../index';
/* users */
export const getUsers = async ({state, effects}: Context) => {
  const {
    users: {data},
  } = await effects.users.gql.queries.UsersQ();

  const addIsFavToUsers = [...data].map(user => ({...user, isFav: false}));

  state.users = addIsFavToUsers;
  state.loading = false;
};

export const getUser = async ({state, effects}: Context, id: string) => {
  // const user = [...state.users].find((user) => user.id === id)
  const {user} = await effects.users.gql.queries.UserQ({
    userId: id,
  });
  state.currentUser = user;
};

export const addUser = async (
  {state, effects}: Context,
  user: {id: string; username: string; name: string; phone: string},
) => {
  const {createUser} = await effects.users.gql.mutations.CreateUserQ({
    input: {
      ...user,
    },
  });

  const toRewriteId = String(Date.now());

  const tempUser = {
    ...createUser,
    id: toRewriteId,
  };

  state.users.push(tempUser);
};

export const updateUser = async (
  {state, effects}: Context,
  {
    id,
    username,
    name,
    phone,
  }: {id: string; username: string; name: string; phone: string},
) => {
  const {updateUser} = await effects.users.gql.mutations.UpdateUserQ({
    updateUserId: id,
    input: {
      username,
      name,
      phone,
    },
  });

  const checkId = updateUser?.id || id;

  const indexUser = [...state.users].findIndex(user => user.id === checkId);

  if (indexUser === -1) {
    return;
  }

  const changesUser = {
    ...state.users[indexUser],
    ...updateUser,
    id,
  };

  state.users[indexUser] = changesUser;
};

export const clearUsers = ({state}: Context) => {
  state.users = [];
};

/* favs */
export const editUserFavs = (
  {state}: Context,
  {id, isFav}: {id: string; isFav: boolean},
) => {
  const indexUser = [...state.users].findIndex(user => user.id === id);

  if (indexUser === -1) {
    return;
  }

  state.users[indexUser].isFav = !isFav;
};
