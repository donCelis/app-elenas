import { useState, useCallback, memo } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Controller, useFormContext } from 'react-hook-form'
import { theme } from '../../theme'
import Sms from './Sms'

function InputField ({
  name,
  topError = false,
  bottomError = false,
  notEdit = false,
  ...props
}) {
  // console.log('Input')

  const [isFocus, setIsFocus] = useState(false)
  const { control } = useFormContext()
  const { label, mod } = props

  const handleFocus = useCallback(() => setIsFocus(true), [])
  const handleBlur = useCallback(() => setIsFocus(false), [])

  return (
    <View style={mod}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        render={({
          field: { onBlur, onChange, value },
          fieldState: { error }
        }) => (
          <View style={[styles['input-control']]}>
            <TextInput
              style={[
                styles.input,
                (error != null) && styles.inputError,
                isFocus && (error == null) && styles.inputFocus,
                value !== '' && styles.inputFocus
              ]}
              onBlur={() => {
                onBlur()
                handleBlur()
              }}
              onChangeText={(value) => onChange(value)}
              defaultValue={value}
              onFocus={handleFocus}
              {...props}
            />
            {topError && (error != null) && <Sms topError text={error.message} />}
            {bottomError && (error != null) && <Sms bottomError text={error.message} />}
            {notEdit && <Sms notEdit text='Not Editable' />}
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

export default memo(InputField)

const styles = StyleSheet.create({
  label: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.subheading
  },
  'input-control': {
    position: 'relative'
  },
  input: {
    backgroundColor: theme.colors.gray,
    borderWidth: 2,
    borderColor: theme.colors.secondary,
    padding: 12,
    borderRadius: 5,
    marginTop: 15
  },
  inputError: {
    borderColor: theme.colors.wrong
  },
  inputFocus: {
    borderColor: theme.colors.primary
  }
})
