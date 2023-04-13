import React from 'react';
import {Image, StyleSheet} from 'react-native';
import elenas from '../../../assets/elenas.png';
import {resolverImage} from '../../utils/resolverImage';

export default function LogoTitle() {
  return <Image style={styles.logo} source={{uri: resolverImage(elenas)}} />;
}

const styles = StyleSheet.create({
  logo: {flex: 1, width: 100, height: 50, resizeMode: 'contain'},
});
