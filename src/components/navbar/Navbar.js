import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import DrawerLS from '../login-signup/DrawerLS'
import logo from "./images/logo.png"
const Navbar = () => {
  return (
   <>
   <Flex justifyContent={"space-between"} pt="5px" pr="10px" pl="10px" bg='whiteAlpha.100' boxShadow="rgba(17, 17, 26, 0.1) 0px 1px 0px" >
    <Box textAlign={'center'}>
      <Image height="50px" src={logo} alt='logo'/>
    </Box>
    <Box>
        <DrawerLS />
    </Box>
   </Flex>
   
   
   
   
   </>
  )
}

export default Navbar