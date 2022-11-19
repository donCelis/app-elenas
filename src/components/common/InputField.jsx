import { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Controller, useFormContext } from 'react-hook-form'
import { theme } from '../../theme'
import Sms from './Sms'

export default function InputField ({
  name,
  topError = false,
  bottonError = false,
  notEdit = false,
  ...props
}) {
  const [isFocus, setIsFocus] = useState(false)
  const { control } = useFormContext()
  const { label, mod } = props

  const handleFocus = () => {
    setIsFocus(true)
  }
  const handleBlur = () => {
    setIsFocus(false)
  }

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
                error && styles.inputError,
                isFocus && !error && styles.inputFocus,
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
            {(topError && error) && <Sms topError text={error.message} />}
            {(bottonError && error) && <Sms bottonError text={error.message} />}
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
