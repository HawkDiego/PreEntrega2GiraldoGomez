import React, { useState } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Text,
  Center,
  Flex,
  Image,
  Box,
} from '@chakra-ui/react'

import { MdMenu, MdClose } from 'react-icons/md'

export const MenuTogle = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [menu, setMenu] = useState(true)

  const btnRef = React.useRef()
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          onOpen()
          setMenu(false)
        }}
        variant='ghost'
        as='a'
        my={5}
        w='100%'
      >
        <Text fontSize={25}>{menu ? <MdMenu /> : <MdClose />}</Text>
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => {
          setMenu(true)
          onClose()
        }}
        finalFocusRef={btnRef}
        placement='left'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader m='auto'>
            <Flex>
              <Image
                src='/icon.jpg'
                objectFit='cover'
                boxSize={['60px', '80px']}
                borderRadius='20px'
              />
            </Flex>
          </DrawerHeader>

          <DrawerBody color='#525151'>
            <Box fontWeight='bold' mb={5}>
              Home
            </Box>

            <Box fontWeight='bold' mb={5}>
              Shop
            </Box>

            <Box fontWeight='bold' mb={5}>
              Contact
            </Box>

            <Box fontWeight='bold' mb={5}>
              Contact
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}