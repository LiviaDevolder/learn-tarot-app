import { Flex, Link, Text } from '@chakra-ui/react'

export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <Flex
      bg={'primary.purple'}
      color={'tertiary.grey'}
      py={'24px'}
      w={'100%'}
      alignItems={'center'}
      justifyContent={'space-around'}
    >
      <Link href={'mailto:contato@jornada.com'}>contato@jornada.com</Link>
      <Text>Jornada © {year}</Text>
    </Flex>
  )
}
