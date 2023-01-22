import { Context } from '../index';
/* users */
export const getAdmin = async ({ state, effects }: Context) => {
  const { user } = await effects.admin.gql.queries.GET_PROFILE({
    userId: 5
  })

  state.admin = user
}
