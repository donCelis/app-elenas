import { Controller, useFormContext } from 'react-hook-form'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { theme } from '../../theme'

export default function InputField ({ name, ...props }) {
  const { control } = useFormContext()
  const { label } = props

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        render={({
          field: { onBlur, onChange, value },
          fieldState: { error }
        }) => (
          <View>
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              defaultValue={value}
              {...props}
            />
            {error && <Text style={styles.error}>This is required.</Text>}
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
    color: 'white',
    marginLeft: 0
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    padding: 10,
    borderRadius: 4,
    marginVertical: 20
  },
  error: {
    color: theme.colors.wrong,
    textAlign: 'right'
  }
})
