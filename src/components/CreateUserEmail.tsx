import React, {useState, Dispatch, SetStateAction} from 'react';
import { Input, VStack, Icon, FormControl } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';


interface CreateUserEmailProps {
  email: string; 
  setEmail: Dispatch<SetStateAction<string>>;
}



const CreateUserEmail:React.FC<CreateUserEmailProps> = ({
  email: email,
  setEmail: setEmail

}) => {

  const width = Dimensions.get('window').width;

  return(
    <FormControl alignItems="center">
       <Input 
              bg="gray.100"
              value={email}
              onChangeText={ (email) => {
                setEmail(email);
              }}
              InputLeftElement={<Icon as={<MaterialIcons name="mail" />} size={5} ml="2" color="muted.400" />} 
              placeholder="メールアドレス"
              width={width - 40}
              marginX={20}
              />
              </FormControl>
              
  )
};

export default CreateUserEmail