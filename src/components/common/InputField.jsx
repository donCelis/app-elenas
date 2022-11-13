import { Controller, useFormContext } from 'react-hook-form'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { theme } from '../../theme'

export default function InputField ({ name, ...props }) {
  const { control } = useFormContext()
  const { label, style } = props

  const InputStyle = [styles.input, style]

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        render={({
          field: { onBlur, onChange, value },
          fieldState: { error }
        }) => (
          <View style={styles['input-control']}>
            <TextInput
              style={[InputStyle, error && styles.inputError]}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              defaultValue={value}
              {...props}
            />
            {error && <Text style={styles.smsError}>{error.message}</Text>}
          </View>
        )}
        name={name}
        rules={{
          required: true
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    color: theme.colors.white,
    marginLeft: 0,
    fontSize: theme.fontSizes.subheading
  },
  'input-control': {
    position: 'relative'
  },
  input: {
    backgroundColor: theme.colors.gray,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    padding: 12,
    borderRadius: 5,
    marginVertical: 20
  },
  inputError: {
    borderColor: theme.colors.wrong
  },
  smsError: {
    color: theme.colors.wrong,
    textAlign: 'right',
    position: 'absolute',
    bottom: 0,
    right: 0
  }
})
