import React from 'react'

import { Input as ChakraInput } from '../Input'
import { FormControl } from '../FormControl'

import { InputControlProps } from '../../interfaces/IInputProps'

export default function Form({ control, inputProps }: InputControlProps) {
  return (
    <FormControl control={control} inputId={inputProps.id}>
      <ChakraInput {...inputProps} />
    </FormControl>
  )
}
