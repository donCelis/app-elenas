import AsyncStorage from '@react-native-async-storage/async-storage'

const NAMESPACE: string = 'auth'
const ACCESS_TOKEN_KEY: string = `${NAMESPACE}:token`

const getAccessToken = async () => {
  const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY)
  return token && JSON.parse(token)
}

const setAccessToken = async (token: string) => {
  const stringifiedToken = JSON.stringify(token)
  await AsyncStorage.setItem(ACCESS_TOKEN_KEY, stringifiedToken)
}

const removeAccessToken = async () => {
  await AsyncStorage.removeItem(ACCESS_TOKEN_KEY)
}

export { getAccessToken, setAccessToken, removeAccessToken }
