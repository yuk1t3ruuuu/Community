import React, {useState, Dispatch, SetStateAction} from 'react';
import { Input, VStack, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';


interface LoginUserNameProps {
  name: string; 
  setName: Dispatch<SetStateAction<string>>;
}



const LoginUserName:React.FC<LoginUserNameProps> = ({
  name,
  setName

}) => {

  return(
       <Input w={{
                base: "75%",
                md: "25%"
              }} 
              value={name}
              onChangeText={ (name) => {
                setName(name);
              }}
              InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} 
              placeholder="ユーザネーム"
              variant="underlined" />
              
  )
};

export default LoginUserName