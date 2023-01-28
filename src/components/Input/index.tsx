import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import { InputProps } from '../../interfaces/IInputProps'

function Input(props: InputProps) {
  const { rightIcon, ...rest } = props
  return (
    <InputGroup>
      <ChakraInput {...rest} />
      {rightIcon && <InputRightElement>{rightIcon}</InputRightElement>}
    </InputGroup>
  )
}

export { Input }
