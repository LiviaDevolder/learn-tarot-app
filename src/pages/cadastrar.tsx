import { Flex, Img, Text, Link } from '@chakra-ui/react'
import { Type } from 'interfaces/IHeader'
import Header from 'components/Header'
import Form from 'components/Form'
import Button from 'components/Button'

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
        <Img src="/img/tarot-devil.png" width={'667px'}></Img>
        <Flex
          gridGap={'32px'}
          flexDir={'column'}
          alignItems={'center'}
          p={'48px'}
          w={'100%'}
        >
          <Text fontSize={'36px'} fontFamily={'display'}>
            Faça parte dessa comunidade!
          </Text>
          <Flex w={'100%'} flexDir={'column'} gridGap={'24px'}>
            <Form
              inputProps={{ id: 'name', placeholder: 'Maria da Silva' }}
              control={{ label: 'Nome completo' }}
            ></Form>
            <Form
              inputProps={{ id: 'email', placeholder: 'maria@silva.com' }}
              control={{ label: 'Email' }}
            ></Form>
            <Form
              inputProps={{
                id: 'confirmEmail',
                placeholder: 'maria@silva.com'
              }}
              control={{ label: 'Confirmar email' }}
            ></Form>
            <Form
              inputProps={{ id: 'cpf', placeholder: '111.222.333-44' }}
              control={{ label: 'CPF' }}
            ></Form>
            <Form
              inputProps={{ id: 'birthDate', placeholder: 'DD/MM/YYYY' }}
              control={{ label: 'Data de nascimento' }}
            ></Form>
            <Form
              inputProps={{ id: 'password', placeholder: 'S3nha!' }}
              control={{ label: 'Senha' }}
            ></Form>
            <Form
              inputProps={{
                id: 'confirmPassword',
                placeholder: '******'
              }}
              control={{ label: 'Confirmar senha' }}
            ></Form>
          </Flex>
          <Flex gridGap={'8px'} mt={'-20px'} alignSelf={'flex-start'}>
            <Text
              color={'tertiary.white'}
              fontFamily={'body'}
              fontSize={'16px'}
              as={'span'}
            >
              Já possui uma conta?
            </Text>
            <Link
              href={'/entrar'}
              fontFamily={'body'}
              fontSize={'16px'}
              color={'primary.yellow'}
            >
              Clique aqui
            </Link>
          </Flex>

          <Button variant={'primary'}>Criar conta</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
