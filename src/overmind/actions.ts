import {Context} from './index';
import {apiUrl, X_API_KEY} from '../../config';
import {Overmind} from 'overmind';

export const onInitializeOvermind = async (
  {state, actions, effects}: Context,
  instance: Overmind<Context>,
) => {
  effects.users.gql.initialize({
    endpoint: apiUrl,
    headers: () => ({
      'x-api-key': X_API_KEY,
    }),
    options: {
      cache: 'force-cache',
    },
  });
  effects.admin.gql.initialize({
    endpoint: apiUrl,
    headers: () => ({
      'x-api-key': X_API_KEY,
    }),
    options: {
      cache: 'force-cache',
    },
  });
};
