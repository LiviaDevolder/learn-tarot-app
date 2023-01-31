import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

// Foundational style overrides
import config from './foundations/config'
import fonts from './foundations/fonts'
import colors from './foundations/colors'
import shadows from './foundations/shadows'

// Component style overrides
import Button from './components/button'
import Input from './components/input'
import FormLabel from './components/formLabel'

const customTheme = {
  styles,
  fonts,
  config,
  colors,
  shadows,
  components: {
    Button,
    Input,
    FormLabel
  }
}

export default extendTheme(customTheme)
