import {
  Avatar,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import Button from 'components/Button'
import { IHeader, Type } from 'interfaces/IHeader'

export default function RightList({ type }: IHeader) {
  const isLogged = type === Type.logged
  const isGuest = type === Type.guest

  return isLogged ? (
    <Menu>
      <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        maxH={'54px'}
      >
        <Avatar
          size={'md'}
          src={
            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
          }
        />
      </MenuButton>
      <MenuList>
        <MenuItem>Link 1</MenuItem>
        <MenuItem>Link 2</MenuItem>
        <MenuDivider />
        <MenuItem>Link 3</MenuItem>
      </MenuList>
    </Menu>
  ) : isGuest ? (
    <Flex alignItems={'center'}>
      <Link
        textDecor={'none'}
        fontFamily={'body'}
        fontSize={'24px'}
        mr={'24px'}
        _hover={{ textDecoration: 'none' }}
      >
        Entrar
      </Link>
      <Button variant={'primary'}>Assinar</Button>
    </Flex>
  ) : (
    <Flex display={'none'}></Flex>
  )
}
