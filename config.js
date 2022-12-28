import { API_URL, OVERMIND_DEBUG_IP } from '@env'

export const apiUrl = API_URL
export const overmindIp = OVERMIND_DEBUG_IP ? `${OVERMIND_DEBUG_IP}:3031` : false
