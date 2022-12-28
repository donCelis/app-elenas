export const getUsers = async ({ state, effects }) => {
  state.loading = true
  const users = await effects.users.gql.queries.GET_USERS()
  state.users = users
  state.loading = false
}

export const addUser = ({ state }, user) => {
  const { users } = state
  const id = String(Date.now())

  users.data.push({
    id,
    ...user
  })
}

export const filterUser = ({ state }, id) => {
  const { users } = state

  return users.data.find(user => user.id === id)
}
