import {setAccessToken} from '../utils/authStorage';
import fakeToken from '../utils/fakeTokenGenerator';

export const useLogin = () => {
  const logIn = async (): Promise<void> => {
    const token = fakeToken();
    await setAccessToken(token);
  };

  return {
    logIn,
  };
};
