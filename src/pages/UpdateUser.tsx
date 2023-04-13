import React from 'react';
import {useUpdate} from '../hooks/useUpdate';
/* components */
import KeyboardShift from '../components/KeyboardShift';
import AddEditForm from '../components/AddEditForm';

export default function UpdateUser({route}) {
  const currentUser = route?.params;

  const {updateUser} = useUpdate();

  const handleUpdateUser = async data => await updateUser(data);

  return (
    <KeyboardShift>
      <AddEditForm
        isEdit
        currentUser={currentUser}
        callBack={handleUpdateUser}
      />
    </KeyboardShift>
  );
}
