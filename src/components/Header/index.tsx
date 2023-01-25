import { ReactNode } from 'react'
import { Box, Text, Flex, HStack, Link } from '@chakra-ui/react'
import RightList from './rightList'

const Links = ['Anotações', 'Tiragens']

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    textDecoration={'none'}
    fontFamily={'body'}
    fontSize={'24px'}
    _hover={{
      textDecoration: 'underline'
    }}
    href={'#'}
  >
    {children}
  </Link>
)

export default function Header({ type }: { type: string }) {
  return (
    <Box
      bg={'primary.purple'}
      color={'tertiary.grey'}
      w={'100%'}
      py={'20px'}
      boxShadow={'dropShadow'}
    >
      <Flex justifyContent={'space-evenly'} alignItems={'center'}>
        <Text fontSize={'36px'} fontFamily={'display'}>
          Jornada
        </Text>
        <HStack as={'nav'} spacing={'32px'}>
          {Links.map((link) => (
            <NavLink key={link}>{link}</NavLink>
          ))}
        </HStack>

        <RightList type={type} />
      </Flex>
    </Box>
  )
}
