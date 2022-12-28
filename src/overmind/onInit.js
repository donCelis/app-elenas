import { apiUrl } from '../../config'

export const onInitialize = ({ effects }) => {
  console.log(effects)
  effects.gql.initialize({
    // query and mutation options
    endpoint: apiUrl
  })
}
