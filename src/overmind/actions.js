import { apiUrl } from '../../config'

export const onInitializeOvermind = async ({ state, actions, effects }) => {
  effects.users.gql.initialize({
    endpoint: apiUrl
  })
}
