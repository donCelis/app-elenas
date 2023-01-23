import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {theme} from '../../theme';

type Props = {
  focused: boolean;
  icon: any;
};

export default function TabBarIcon({focused, icon}: Props): JSX.Element {
  const currentColor = focused ? 'primary' : 'secondary';
  const currentIcon = focused ? icon : `${icon}-outline`;
  return (
    <Ionicons
      name={currentIcon}
      size={24}
      color={theme?.colors[currentColor]}
    />
  );
}
