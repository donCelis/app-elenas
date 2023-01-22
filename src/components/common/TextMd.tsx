import { StyleSheet, Text } from 'react-native'
import { theme } from '../../theme'
import type { PropsWithChildren } from "react"

type SectionProps = PropsWithChildren<{
  color: string | null
  fontSize: string | null
  fontWeight: string | null
  align: string | null
  style: {} | null
}>;

export default function TextMd ({
  children,
  color,
  fontSize,
  fontWeight,
  align,
  style,
  ...restProps
}: SectionProps) {
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    color === 'white' && styles.colorText,
    fontSize === 'subheading' && styles.subheading,
    fontSize === 'title' && styles.title,
    fontWeight === 'bold' && styles.bold,
    align === 'center' && styles.align
  ]
  return (
    <Text {...restProps} style={[textStyles, style]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  subheading: {
    fontSize: theme.fontSizes.subheading
  },
  title: {
    fontSize: theme.fontSizes.title
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  colorText: {
    color: theme.colors.whitePure
  },
  align: {
    textAlign: 'center'
  }
})
