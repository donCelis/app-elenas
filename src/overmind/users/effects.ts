import { graphql } from 'overmind-graphql'
import * as queries from '../graphql/queries'
import * as mutations from '../graphql/mutations'

export const gql = graphql({
  queries,
  mutations
})
