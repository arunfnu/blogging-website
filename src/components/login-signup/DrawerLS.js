import React, { useState } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Flex,
  useColorModeValue,
  Box,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'

const DrawerLS = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const colors = useColorModeValue(
      ['teal.50', 'blue.50'],
      ['teal.900', 'blue.900'],
    )

    const [tabIndex, setTabIndex] = useState(0)
    const bg = colors[tabIndex]

  return (
    <>
      <Button ref={btnRef}  onClick={onOpen} variant="outline">
        Login
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"xl"}
      >
        <DrawerOverlay />
        <DrawerContent>
         
          <DrawerCloseButton mr="884px" color="white"  bgColor="blue.300" _hover={{ bgColor:"blue.400"}} width="50px" borderRightRadius={"0px"}/>
         
          {/* <DrawerHeader>
            <Flex>
              <Button>Login</Button>
              <Button>Sign-up</Button>
            </Flex>
          </DrawerHeader> */}

          <DrawerBody>
          <Tabs isFitted variant='enclosed' onChange={(index) => setTabIndex(index)} bg={bg}>
  <TabList mb='1em'>
    <Tab _selected={{ color: 'white', bg: 'teal' }} >Login</Tab>
    <Tab _selected={{ color: 'white', bg: 'blue.400' }}>Sign-up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      {/* <p>one!</p> */}
      <LoginPage />
    </TabPanel>
    <TabPanel>
    <SignupPage />
    </TabPanel>
  </TabPanels>
</Tabs>
            
            
            
            
            
            {/* <Input placeholder='Type here...' /> */}


          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
   

export default DrawerLS;