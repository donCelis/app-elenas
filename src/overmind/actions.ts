import {Context} from './index';
import {apiUrl} from '../../config';
import {Overmind} from 'overmind';

export const onInitializeOvermind = async (
  {state, actions, effects}: Context,
  instance: Overmind<Context>,
) => {
  effects.users.gql.initialize({
    endpoint: apiUrl,
    headers: () => ({
      'x-api-key':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzU3Mjg0NTIsImlzcyI6ImdyYWZiYXNlIiwiYXVkIjoiMDFHUk1LNVlRODhaUVIxUks4UkJNMFdGUjEiLCJqdGkiOiIwMUdSTUs1WVE4WFlKSDVGOE5CUVQzNjM5NiIsImVudiI6InByb2R1Y3Rpb24iLCJwdXJwb3NlIjoicHJvamVjdC1hcGkta2V5In0.gEVjxcS43n0ttjlqGUnFivu6LLqGb4a1BfzgX40mJE0',
    }),
  });
  effects.admin.gql.initialize({
    endpoint: apiUrl,
    headers: () => ({
      'x-api-key':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzU3Mjg0NTIsImlzcyI6ImdyYWZiYXNlIiwiYXVkIjoiMDFHUk1LNVlRODhaUVIxUks4UkJNMFdGUjEiLCJqdGkiOiIwMUdSTUs1WVE4WFlKSDVGOE5CUVQzNjM5NiIsImVudiI6InByb2R1Y3Rpb24iLCJwdXJwb3NlIjoicHJvamVjdC1hcGkta2V5In0.gEVjxcS43n0ttjlqGUnFivu6LLqGb4a1BfzgX40mJE0',
    }),
  });
};
