import {Context} from './index';
import {apiUrl} from '../../config';
import {Overmind} from 'overmind';

export const onInitializeOvermind = async (
  {state, actions, effects}: Context,
  instance: Overmind<Context>,
) => {
  effects.users.gql.initialize({
    endpoint: apiUrl,
  });
  effects.admin.gql.initialize({
    endpoint: apiUrl,
  });
};
