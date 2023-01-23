import React from 'react';
import AddEditForm from '../components/AddEditForm';
import KeyboardShift from '../components/KeyboardShift';
import {useAddUser} from '../hooks/useAddUser';

export default function CreateUser() {
  const {addUser} = useAddUser();

  const handleAddUser = async data => await addUser({...data});

  return (
    <KeyboardShift>
      <AddEditForm callBack={handleAddUser} />
    </KeyboardShift>
  );
}
