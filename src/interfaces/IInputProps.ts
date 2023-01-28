import {
  InputProps as InputPropsChakra,
  NumberInputProps
} from '@chakra-ui/react'

import { Props } from 'chakra-react-select'

export interface InputProps extends InputPropsChakra {
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  eyeVisibleIcon?: React.ReactElement
  eyeHiddenIcon?: React.ReactElement
}

export type IInputProps = InputProps | NumberInputProps | Props
