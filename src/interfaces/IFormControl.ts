import { FormControlProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

export interface IFormControl extends FormControlProps {
  errorMessage?: string
}

export interface IInputControl {
  inputId?: string
  control: IFormControl
  children?: ReactNode
}
