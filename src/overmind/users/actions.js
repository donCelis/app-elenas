/* users */
export const getUsers = async ({ state, effects }) => {
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

export const getUser = async ({ state, effects }, id) => {
  // const user = [...state.users].find((user) => user.id === id)
  const { user } = await effects.users.gql.queries.GET_SINGLE_USER({
    userId: id
  })
  state.currentUser = user
}

export const addUser = async ({ state, effects }, user) => {
  const { createUser } = await effects.users.gql.mutations.ADD_USER({
    input: {
      ...user
    }
  })

  state.users = [...state.users, createUser]
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
