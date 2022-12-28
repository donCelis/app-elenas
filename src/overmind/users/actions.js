export const getUsers = async ({ state, effects }) => {
  state.loading = true
  const options = {
    options: {
      sort: [
        {
          field: 'name',
          order: 'ASC'
        }
      ]
    }
  }
  const {
    users: { data }
  } = await effects.users.gql.queries.GET_USERS(options)
  state.users = data
  state.loading = false
}

export const getUser = ({ state }, id) => {
  const { users } = state

  const user = users.find((user) => user.id === id)
  return user
}

export const addUser = ({ state }, user) => {
  const { users } = state
  const id = String(Date.now())

  users.push({
    id,
    ...user
  })
}

export const updateUser = ({ state }, changes) => {
  const { users } = state
  const indexUser = users.findIndex((user) => user.id === changes.id)

  if (indexUser === -1) return

  const changesUser = {
    ...users[indexUser],
    ...changes
  }

  users[indexUser] = changesUser
}
