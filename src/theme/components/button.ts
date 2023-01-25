const Button = {
  baseStyle: {
    '&&': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      paddingInlineStart: '0',
      paddingInlineEnd: '0',
      px: '24px',
      py: '16px',
      fontWeight: 700,
      minH: '48px',
      fontSize: '16px',
      color: '#000',
      borderRadius: '5px',
      border: 'none',
      transitionProperty: 'background',
      transitionDuration: '240ms',
      transitionTimingFunction: 'cubic-bezier(0.32, 0.01, 0.32, 1)',
      lineHeight: 'inherit',
      fontFamily: 'body'
    }
  },
  variants: {
    primary: {
      '&&': {
        background: 'linear-gradient(180deg, #FAD901 0%, #B29C00 100%);',
        _hover: {
          bg: 'linear-gradient(180deg, #FFE74B 0%, #B5A534 100%);'
        },
        _active: {
          bg: 'linear-gradient(180deg, #FAD901 0%, #B29C00 100%);'
        }
      }
    },
    secondary: {
      '&&': {
        background: 'linear-gradient(180deg, #73086C 0%, #450442 100%);',
        color: '#D9D9D9',
        _hover: {
          bg: 'linear-gradient(180deg, #762971 0%, #4E194B 100%);'
        },
        _active: {
          bg: 'linear-gradient(180deg, #73086C 0%, #450442 100%);'
        }
      }
    }
  }
}

export default Button
