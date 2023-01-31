import React from 'react'

import {
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormLabel
} from '@chakra-ui/react'
import { IInputControl } from 'interfaces/IFormControl'

// eslint-disable-next-line react/display-name
const FormControl = React.forwardRef(
  (props: IInputControl, ref: React.LegacyRef<HTMLDivElement>) => {
    const { control, inputId, children } = props
    const { errorMessage, label, ...rest } = control

    return (
      <ChakraFormControl ref={ref} {...rest}>
        {label ? <FormLabel htmlFor={inputId}>{label}</FormLabel> : null}
        {children}
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </ChakraFormControl>
    )
  }
)

export { FormControl }
