import { ReactNode } from 'react'
import { Box, Flex, HStack, Link } from '@chakra-ui/react'
import RightList from './rightList'
import { IHeader } from 'interfaces/IHeader'

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

export default function Header({ type }: IHeader) {
  return (
    <Box
      bg={'primary.purple'}
      color={'tertiary.grey'}
      w={'100%'}
      py={'20px'}
      boxShadow={'dropShadow'}
    >
      <Flex justifyContent={'space-evenly'} alignItems={'center'}>
        <Link
          textDecoration={'none'}
          fontSize={'36px'}
          fontFamily={'display'}
          _hover={{ textDecoration: 'none' }}
          href={'/'}
        >
          Jornada
        </Link>
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
