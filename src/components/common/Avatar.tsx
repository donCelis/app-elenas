import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme';
import {createAvatar} from '../../utils/createAvatar';

type Avatar = {
  str: string;
  size: number;
};

export default function Avatar({str = '', size}: Avatar) {
  const {name} = createAvatar(str);

  const sizeIcon: {} = size && {width: size, height: size};
  return (
    <View style={[styles.circle, sizeIcon]}>
      <Text style={styles.letter}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 200,
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  },
  letter: {
    fontSize: 20,
    textAlign: 'center',
    color: theme.colors.whitePure,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
