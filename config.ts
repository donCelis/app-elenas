import { API_URL, OVERMIND_DEBUG_IP } from '@env'

export const apiUrl: string = API_URL
export const overmindIp: string = OVERMIND_DEBUG_IP ? `${OVERMIND_DEBUG_IP}:3031` : ''
