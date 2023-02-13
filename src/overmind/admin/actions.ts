import {Context} from '../index';
/* users */
export const getAdmin = async ({state, effects}: Context) => {
  const response = await effects.admin.gql.queries.UserAdminQ({
    UserAdminVariables: {
      userAdminBy: {id: 'useradmin_01GRSJXVRHYH5HXNJVFEGW2KX4'},
    },
    UserCollectionVariables: {first: 10},
    UserVariables: {by: {id: 'user_01GRMKJ759WY2N1WZ2QV04WBV2'}},
  });

  // userAdminBy: {id: 'useradmin_01GRSJXVRHYH5HXNJVFEGW2KX4'},
  console.log(response);

  // state.admin.user = userAdmin;
};
