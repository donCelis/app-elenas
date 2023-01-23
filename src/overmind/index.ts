import {createOvermind, IContext} from 'overmind';
import {
  createActionsHook,
  createEffectsHook,
  createReactionHook,
  createStateHook,
} from 'overmind-react';
import {namespaced, merge} from 'overmind/config';
import {overmindIp} from '../../config';

/* states, actions, effects */
import {state} from './state';
import * as actions from './actions';
import * as users from './users';
import * as admin from './admin';

const config = merge(
  {
    state,
    actions,
  },
  namespaced({users, admin}),
);

console.log(overmindIp);

export const overmind = createOvermind(config, {
  devtools: overmindIp,
});

export type Context = IContext<typeof config>;

export const useAppState = createStateHook<Context>();
export const useActions = createActionsHook<Context>();
export const useAppEffects = createEffectsHook<Context>();
export const useReaction = createReactionHook<Context>();
