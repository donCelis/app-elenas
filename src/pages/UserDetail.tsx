import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {useAppState} from '../overmind';

import {PATH_PAGE} from '../routes/paths';

/* Components */
import Profile from '../components/Profile';
import Button from '../components/common/Button';
import LoadingModal from '../components/common/Modal';

export default function UserDetail({route, navigation: {navigate}}) {
  const {loading, users} = useAppState();

  const idUser = route?.params?.screen;

  const currentUser = users.find(user => user.id === idUser);

  const handleEdit = () => {
    navigate(PATH_PAGE.update, currentUser);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <LoadingModal />}
      {!loading && (
        <Profile isEdit {...currentUser}>
          <Button title="Edit" onPress={handleEdit} />
        </Profile>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
