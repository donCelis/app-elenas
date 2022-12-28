import { createOvermind } from 'overmind'
import {
  createActionsHook,
  createEffectsHook,
  createReactionHook,
  createStateHook
} from 'overmind-react'
import { namespaced, merge } from 'overmind/config'
import { overmindIp } from '../../config'

/* states, actions, effects */
import { onInitialize } from './onInit'
import * as users from './users'
import * as admin from './admin'

const config = merge({
  onInitialize
}, namespaced({ users, admin }))

export const overmind = createOvermind(config, {
  devtools: overmindIp
})

export const useAppState = createStateHook()
export const useActions = createActionsHook()
export const useAppEffects = createEffectsHook()
export const useReaction = createReactionHook()
