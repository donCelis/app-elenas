import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {theme} from '../../theme';

export default function Button({title, ...props}: {title: string}) {
  return (
    <Pressable style={styles.button} {...props}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    paddingVertical: 16,
  },
  text: {
    color: theme.colors.whitePure,
    textAlign: 'center',
    fontSize: theme.fontSizes.subheading,
  },
});
