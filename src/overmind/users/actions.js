export const getUsers = async ({ state, effects }) => {
  state.loading = true
  // console.log(effects)
  const users = await effects.users.gql.queries.GET_USERS()
  console.log(users)
  /*  state.users = users
  state.loading = false */
}
