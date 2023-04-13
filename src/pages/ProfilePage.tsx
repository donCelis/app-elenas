import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useAppState} from '../overmind';

import Profile from '../components/Profile';
import SignOut from '../components/SignOut';
import LoadingModal from '../components/common/Modal';

export default function ProfilePage() {
  const {admin, loading} = useAppState();
  const user = admin;

  return (
    <SafeAreaView style={styles.container}>
      {loading && <LoadingModal />}
      {!loading && (
        <Profile {...user}>
          <SignOut />
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
