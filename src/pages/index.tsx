import { Box, Flex, Img, Text } from '@chakra-ui/react'
import Header from 'components/Header'

export default function Home() {
  return (
    <Flex
      flexDir={'column'}
      bgColor={'secondary.purple.400'}
      h={'100%'}
      alignItems={'center'}
    >
      <Header type="guest"></Header>
      <Text
        fontFamily={'display'}
        fontSize={'36px'}
        color={'tertiary.grey'}
        my={'36px'}
      >
        A sua jornada avança por aqui!
      </Text>
      <Flex maxW={'957px'} flexDir={'column'}>
        <Img src="/img/home-cards.png"></Img>

        <Box mt={'36px'}>
          <Text
            as={'span'}
            fontFamily={'display'}
            fontSize={'32px'}
            color={'#FAD901'}
            mr={'8px'}
          >
            Tudo começa com um salto de fé.
          </Text>
          <Text
            as={'span'}
            display={'inline'}
            fontFamily={'body'}
            fontSize={'24px'}
          >
            Anote toda a sua jornada, consulte onde e quando quiser, enquanto
            documenta de forma simples e prática as suas tiragens e compartilha
            com seus consulentes.
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}
