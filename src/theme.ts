import {Platform} from 'react-native';

const theme = {
  appBar: {
    primary: '#24292e',
    primaryText: '#fff',
    secondaryText: '#999',
  },
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#521ece',
    secondary: '#999',
    third: '#0366d6',
    white: '#fafafa',
    whitePure: 'white',
    gray: '#f3f3f3',
    wrong: '#e74c3c',
    bg: '#2c3e50',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    title: 20,
  },
  fonts: {
    main: Platform.select({
      ios: 'System',
      android: 'Roboto',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

const screenOptions = {
  tabBarActiveTintColor: theme?.colors.primary,
  tabBarInactiveTintColor: theme?.colors.textSecondary,
  headerStyle: {
    backgroundColor: theme?.colors.primary,
  },
  headerTintColor: theme?.colors.white,
};

export {theme, screenOptions};
