import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

import type {PropsWithChildren} from 'react';

export default function KeyboardShift({children}: PropsWithChildren) {
  const height = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={height}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}
      enabled>
      {children}
    </KeyboardAvoidingView>
  );
}
