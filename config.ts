export const apiUrl: string = process.env.API_URL!;

console.log(apiUrl);

export const X_API_KEY: string = process.env.X_API_KEY!;

export const overmindIp: string = process.env.OVERMIND_DEBUG_IP
  ? `${process.env.OVERMIND_DEBUG_IP}:3031`
  : '';
