export const apiUrl: string = process.env.API_URL!;
export const overmindIp: string = process.env.OVERMIND_DEBUG_IP
  ? `${process.env.OVERMIND_DEBUG_IP}:3031`
  : '';
