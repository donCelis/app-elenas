import {useActions} from '../overmind';

type Props = {username: string; name: string; email: string; phone: string};

export const useAddUser = () => {
  const {
    users: {addUser: addUserAction},
  } = useActions();

  const addUser = async ({username, name, email, phone}: Props) => {
    await addUserAction({username, name, email, phone});
  };

  return {addUser};
};
