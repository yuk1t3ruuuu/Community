import React, {useState} from 'react';
import { Dimensions } from 'react-native';
import { VStack, HStack, Heading, IconButton, Icon, Box, Text, View } from 'native-base';
import { Feather } from '@expo/vector-icons';
import LoginButton from '../src/components/LoginButton';
import SignupButton from '../src/components/SignupButton';
import LoginUserName from '../src/components/LoginUserName';
import LoginPassword from '../src/components/LoginPassword';
import { color } from 'native-base/lib/typescript/theme/styled-system';



export default function LoginOrSignupScreen() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    

  return(
    <VStack>
      <View
       w={{
        base: "40%",
        md: "40%"
       }}
       h={{
        base: "40%",
        md: "40%"
       }}/>
      <VStack space={3} w="100%" alignItems="center">
        <LoginUserName
          name={name}
          setName={setName}/>
        <LoginPassword
           password={password}
           setPassword={setPassword}/>
      </VStack>
      <View
       w={{
        base: "15%",
        md: "15%"
       }}
       h={{
        base: "15%",
        md: "15%"
       }}/>
      <VStack space={3} w="100%" alignItems="center">
        <LoginButton
            name={name}
            password={password}/>
        <Text color={'#3E8E41'} style={{fontWeight: "bold"}}>or</Text>    
        <SignupButton/>
      </VStack>
        

    </VStack>



  );
}
