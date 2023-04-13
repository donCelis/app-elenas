import {Context} from '../index';
/* users */
export const getUsers = async ({state, effects, actions}: Context) => {
  const responseUsers = await effects.users.gql.queries.UsersQ();

  console.log(responseUsers);
};

export const addUser = async (
  {state, effects}: Context,
  user: {username: string; phone: string},
) => {
  const logTest = await effects.users.gql.mutations.UserCreateM({
    input: {
      ...user,
    },
  });

  console.log(logTest);

  /* const toRewriteId = String(Date.now());

  const tempUser = {
    ...createUser,
    id: toRewriteId,
  }; */

  //state.users.users!.data!.push(tempUser);
};

/* export const updateUser = async (
  {state, effects}: Context,
  {
    id,
    username,
    name,
    phone,
  }: {id: string; username: string; name: string; phone: string},
) => {
  const {updateUser} = await effects.users.gql.mutations.UpdateUserM({
    updateUserId: id,
    input: {
      username,
      name,
      phone,
    },
  });

  const checkId = updateUser?.id || id;

  const indexUser = [...state.users.users?.data].findIndex(
    user => user.id === checkId,
  );

  if (indexUser === -1) {
    return;
  }

  const changesUser = {
    ...state.users.users?.data[indexUser],
    ...updateUser,
    id,
  };

  state.users.users!.data[indexUser] = changesUser;
}; */

/* export const clearUsers = ({state}: Context) => {
  state.users.users!.data = [];
}; */

/* favs */
/* export const editUserFavs = (
  {state}: Context,
  {id, isFav}: {id: string; isFav: boolean},
) => {
  const indexUser =
    state.users.userList &&
    [...state.users.userList].findIndex(user => user.id === id);

  if (indexUser === -1) {
    return;
  }

  state.users.userList[indexUser].isFav = !isFav;
}; */
