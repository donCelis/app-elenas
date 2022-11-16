import AsyncStorage from '@react-native-async-storage/async-storage'

const NAMESPACE = 'auth'
const ACCESS_TOKEN_KEY = `${NAMESPACE}:token`

const getAccessToken = async () => {
  const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY)
  return token && JSON.parse(token)
}

const setAccessToken = async (token) => {
  const stringifiedToken = JSON.stringify(token)
  await AsyncStorage.setItem(ACCESS_TOKEN_KEY, stringifiedToken)
}

const removeAccessToken = async () => {
  await AsyncStorage.removeItem(ACCESS_TOKEN_KEY)
}

export { getAccessToken, setAccessToken, removeAccessToken }
