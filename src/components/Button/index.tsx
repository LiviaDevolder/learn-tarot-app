import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react'

export default function Button(props: ButtonProps) {
  const { children } = props

  return <ChakraButton {...props}>{children}</ChakraButton>
}
