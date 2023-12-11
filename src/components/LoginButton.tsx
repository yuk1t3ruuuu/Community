import React from 'react';
import { Button } from 'native-base';
import { Dimensions } from 'react-native';


interface LoginButtonProps {
  name: string;
  password: string
}


const LoginButton: React.FC<LoginButtonProps> = ({
    name,
    password
  
}) => {

  const width = Dimensions.get('window').width;  


  const handlePress = () => {}


  return(
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
      ログイン/Log in
    </Button>
  );


}

export default LoginButton;