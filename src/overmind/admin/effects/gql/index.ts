import {graphql} from 'overmind-graphql';
import * as queries from './queries';

export const gql = graphql({
  queries,
});
