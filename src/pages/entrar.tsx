import { Flex, Img, Link, Text } from '@chakra-ui/react'
import Button from 'components/Button'
import Form from 'components/Form'
import Header from 'components/Header'
import { Type } from 'interfaces/IHeader'

export default function Cadastrar() {
  return (
    <Flex
      flexDir={'column'}
      bgColor={'secondary.purple.400'}
      h={'100%'}
      alignItems={'center'}
    >
      <Header type={Type.none}></Header>
      <Flex w={'100%'}>
        <Img src="/img/hands-tarot.png" maxW={'667px'} />
        <Flex
          gridGap={'32px'}
          flexDir={'column'}
          alignItems={'center'}
          p={'48px'}
          w={'100%'}
        >
          <Text fontSize={'36px'} fontFamily={'display'}>
            Bom ter você de volta!
          </Text>
          <Flex w={'100%'} flexDir={'column'} gridGap={'24px'}>
            <Form
              inputProps={{ id: 'email', placeholder: 'maria@silva.com' }}
              control={{ label: 'Email' }}
            ></Form>
            <Form
              inputProps={{ id: 'senha', placeholder: '******' }}
              control={{ label: 'Senha' }}
            ></Form>
            <Flex gridGap={'8px'} mt={'-20px'} alignSelf={'flex-start'}>
              <Text
                color={'tertiary.white'}
                fontFamily={'body'}
                fontSize={'16px'}
                as={'span'}
              >
                Ainda não possui uma conta?
              </Text>
              <Link
                href={'/cadastrar'}
                fontFamily={'body'}
                fontSize={'16px'}
                color={'primary.yellow'}
              >
                Clique aqui
              </Link>
            </Flex>
          </Flex>
          <Button variant={'primary'}>Criar conta</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
