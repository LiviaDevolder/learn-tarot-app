import { ComponentStyleConfig } from '@chakra-ui/react'

const Input: ComponentStyleConfig = {
  sizes: {
    md: {
      field: {
        borderRadius: 5,
        paddingInlineStart: '16px',
        paddingInlineEnd: '16px',
        py: '16px',
        fontFamily: 'body',
        color: 'tertiary.darkgrey',
        appearance: 'none',
        fontSize: '16px',
        lineHeight: '100%',
        h: '48px',
        '::-ms-reveal': {
          display: 'none'
        }
      }
    }
  },
  defaultProps: {
    size: 'md',
    variant: 'filled'
  }
}

export default Input
