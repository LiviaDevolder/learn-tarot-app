import { Box, Flex, Img, Text } from '@chakra-ui/react'
import Footer from 'components/Footer'
import Header from 'components/Header'
import { Type } from 'interfaces/IHeader'

export default function Index() {
  return (
    <Flex
      flexDir={'column'}
      bgColor={'secondary.purple.400'}
      h={'100%'}
      alignItems={'center'}
    >
      <Header type={Type.guest}></Header>
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

      <Flex w={'100%'} my={'48px'}>
        <Img maxW={'663px'} src="/img/woman.png" />
        <Flex
          px={'48px'}
          bg={'tertiary.grey'}
          alignItems={'center'}
          flexDir={'column'}
          justifyContent={'center'}
        >
          <Text
            display={'inline'}
            color={'tertiary.black'}
            fontFamily={'body'}
            fontSize={'36px'}
          >
            Minha curva de aprendizado mudou completamente desde que comecei a
            usar a plataforma. Todos que jogam tarô deveriam experimentar.
          </Text>
          <Flex mt={'32px'}>
            <Text
              as={'span'}
              color={'secondary.gold.400'}
              fontFamily={'display'}
              fontSize={'40px'}
              mr={'8px'}
            >
              -
            </Text>
            <Text
              as={'span'}
              color={'tertiary.black'}
              fontFamily={'display'}
              fontSize={'40px'}
            >
              Usuária
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex w={'100%'}>
        <Footer />
      </Flex>
    </Flex>
  )
}
