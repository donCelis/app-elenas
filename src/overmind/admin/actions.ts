import {Context} from '../index';
/* users */
export const getAdmin = async ({state, effects}: Context) => {
  const {userAdmin, userCollection, user} =
    await effects.admin.gql.queries.UserAdminQ({
      byAdmin: {id: 'useradmin_01GRSJXVRHYH5HXNJVFEGW2KX4'},
      first: 10,
      byUser: {id: 'user_01GRMKJ759WY2N1WZ2QV04WBV2'},
    });

  console.log(userAdmin);
  console.log(userCollection);
  console.log(user);

  state.admin.user = userAdmin;
  state.users.userList = userCollection?.edges;
  state.currentUser = user;
};
