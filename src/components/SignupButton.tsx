import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'native-base';

const SignupButton = () => {

  const handlePress = () => {
    console.log('Pressed!'); 
  };

  return (
    <Button 
    w={{
      base: "50%",
      md: "50%"
    }}
    bg={'#3E8E41'}
    rounded="full"
    _pressed={{ bg: '#BCEAD5' }}
    onPress={handlePress}   
    colorScheme="light" 
  >
    新規登録/Sign up
  </Button>
  );
};


export default SignupButton;