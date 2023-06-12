import React from 'react'
import {
    FormControl,
    FormLabel,
    // FormErrorMessage,
    FormHelperText,
    Input,
    Button,
  } from '@chakra-ui/react'

const LoginPage = () => {
  return (
  <>
<FormControl height={"100%"}>
  <FormLabel  mt="15px">Email address</FormLabel>
  <Input type='email' bgColor={"white"} placeholder="Enter Email..."/>
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormLabel  mt="35px">Password</FormLabel>
  <Input type="password"  bgColor={"white"} placeholder="Enter Password..."/> 
  <Button width="100%" bgColor={"teal"} color="white" _hover={{bg:"teal.500"}} mt="35px">Login</Button>

</FormControl>
  
  
  </>
  )
}

export default LoginPage