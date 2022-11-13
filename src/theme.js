import { Platform } from 'react-native'

export const theme = {
  appBar: {
    primary: '#24292e',
    primaryText: '#fff',
    secondaryText: '#999'
  },
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: Platform.select({
      ios: '#0366d6',
      android: 'tomato',
      default: '#f3f3f3'
    }),
    third: '#521ece',
    white: '#fafafa',
    whitePure: 'white',
    gray: '#f3f3f3',
    wrong: '#e74c3c',
    bg: '#2c3e50'
  },
  fontSizes: {
    body: 14,
    subheading: 16
  },
  fonts: {
    main: Platform.select({
      ios: 'System',
      android: 'Roboto',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  }
}
