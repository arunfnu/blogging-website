import React from 'react'
import {
    FormControl,
    FormLabel,
    // FormErrorMessage,
    FormHelperText,
    Input,
    Button,
  } from '@chakra-ui/react';



const SignupPage = () => {
  return (
    
<FormControl height={"100%"}>
<FormLabel  mt="15px">Username</FormLabel>
  <Input type='text' bgColor={"white"}/>
  <FormLabel  mt="35px">Email address</FormLabel>
  <Input type='email' bgColor={"white"}/>
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormLabel  mt="35px">Password</FormLabel>
  <Input type="password"  bgColor={"white"} /> 
  <Button width="100%" bgColor={"blue.400"} color="white" _hover={{bg:"blue.300"}} mt="35px">Sign Up</Button>

</FormControl>
  )
}

export default SignupPage