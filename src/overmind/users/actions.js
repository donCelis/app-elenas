/* users */
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

  const addIsFavToUsers = [...data].map((user) => {
    return { ...user, isFav: false }
  })

  state.users = addIsFavToUsers
  state.loading = false
}

export const getUser = ({ state }, id) => {
  const user = [...state.users].find((user) => user.id === id)
  return user
}

export const addUser = ({ state }, user) => {
  const id = String(Date.now())
  const tempUser = { id, ...user }

  state.users = [...state.users, tempUser]
}

export const updateUser = ({ state }, changes) => {
  const indexUser = [...state.users].findIndex(
    (user) => user.id === changes.id
  )

  if (indexUser === -1) return

  const changesUser = {
    ...state.users[indexUser],
    ...changes
  }

  state.users[indexUser] = changesUser
}

export const clearUsers = ({ state }) => {
  state.users = []
}

/* favs */
export const editUserFavs = ({ state }, { id, isFav }) => {
  const indexUser = [...state.users].findIndex((user) => user.id === id)

  if (indexUser === -1) return

  state.users[indexUser].isFav = !isFav
}
