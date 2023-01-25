import { Box } from '@chakra-ui/react'
import Header from 'components/Header'

export default function Home() {
  return (
    <Box bgColor={'secondary.purple.400'} h={'100vh'}>
      <Header type="guest"></Header>
    </Box>
  )
}
