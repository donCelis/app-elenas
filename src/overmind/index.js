import { createOvermind } from 'overmind'
import {
  createActionsHook,
  createEffectsHook,
  createReactionHook,
  createStateHook
} from 'overmind-react'
import { namespaced, merge } from 'overmind/config'
import { overmindIp } from '../../config'
import { onInitialize } from './onInit'
import * as users from './users'

const config = merge({
  onInitialize
}, namespaced({ users }))

export const overmind = createOvermind(config, {
  devtools: overmindIp
})

export const useAppState = createStateHook()
export const useActions = createActionsHook()
export const useAppEffects = createEffectsHook()
export const useReaction = createReactionHook()
