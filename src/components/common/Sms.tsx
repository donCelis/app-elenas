import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../../theme';

type Sms = {
  notEdit: boolean | null;
  bottomError: boolean | null;
  topError: boolean | null;
  text: string | null;
};

export default function Sms({notEdit, bottomError, topError, text = ''}: Sms) {
  const styles = [
    stylesSms.sms,
    notEdit && stylesSms.disable,
    bottomError && stylesSms.smsErrorBottom,
    topError && stylesSms.smsErrorTop,
  ];
  return <Text style={styles}>{text}</Text>;
}

const stylesSms = StyleSheet.create({
  sms: {
    position: 'absolute',
    textAlign: 'right',
    right: 0,
  },
  smsErrorBottom: {
    color: theme.colors.wrong,
    bottom: -20,
  },
  smsErrorTop: {
    color: theme.colors.wrong,
    top: -20,
  },
  disable: {
    color: theme.colors.secondary,
    top: -20,
  },
});
