/* users */
export const getAdmin = async ({ state, effects }) => {
  const { user } = await effects.admin.gql.queries.GET_PROFILE({
    userId: 5
  })

  state.admin = user
}
