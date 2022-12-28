import { setAccessToken } from '../utils/authStorage.js'
import fakeToken from '../utils/fakeTokenGenerator.js'

export const useLogin = () => {
  const logIn = async (data) => {
    const token = fakeToken()
    await setAccessToken(token)
  }

  return {
    logIn
  }
}
