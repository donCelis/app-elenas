import React, {useCallback} from 'react';
import {useLinkTo} from '@react-navigation/native';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useActions} from '../../overmind';

import {PATH_PAGE} from '../../routes/paths';
import {theme} from '../../theme';

/* components */
import Avatar from './Avatar';
import TabBarIcon from './TabBarIcon';

type User = {
  id: string;
  name: string;
  username: string;
  isFav: boolean;
};

function UserCard({id, name, username, isFav}: User) {
  const {
    users: {editUserFavs},
  } = useActions();

  const linkTo = useLinkTo();

  const handleRouting = useCallback(() => {
    linkTo(`/${PATH_PAGE.detail}/${id}`);
  }, []);

  const handleChangeFavs = () => editUserFavs({id, isFav});

  return (
    <View style={styles.row}>
      <Pressable style={styles.content} onPress={handleRouting}>
        <Avatar size={50} str={name} />
        <View style={styles.info}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.small}>{username}</Text>
        </View>
      </Pressable>
      <Pressable style={styles.fav} onPress={handleChangeFavs}>
        <TabBarIcon icon="heart" focused={isFav} />
      </Pressable>
    </View>
  );
}

export default UserCard;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.whitePure,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    flex: 1,
  },
  info: {
    marginLeft: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: theme.fontSizes.subheading,
    textTransform: 'capitalize',
  },
  small: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.body,
  },
  fav: {
    padding: 15,
  },
});
