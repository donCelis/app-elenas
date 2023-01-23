import {graphql} from 'overmind-graphql';
import * as queries from '../graphql/queries';

export const gql = graphql({
  queries,
});
