/* users */
export const getUsers = async ({ state, effects }) => {
  const {
    users: { data }
  } = await effects.users.gql.queries.GET_USERS()

  const addIsFavToUsers = [...data].map((user) => ({ ...user, isFav: false }))

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

  const toRewriteId = String(Date.now())

  const tempUser = {
    ...createUser,
    id: toRewriteId
  }

  state.users.push(tempUser)
}

export const updateUser = async (
  { state, effects },
  { id, username, name, phone }
) => {
  const { updateUser } = await effects.users.gql.mutations.UPDATE_CLIENT({
    updateUserId: id,
    input: {
      username,
      name,
      phone
    }
  })

  const checkId = updateUser?.id || id

  const indexUser = [...state.users].findIndex((user) => user.id === checkId)

  if (indexUser === -1) return

  const changesUser = {
    ...state.users[indexUser],
    ...updateUser,
    id
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
