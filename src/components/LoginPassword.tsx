import React, {useState, Dispatch, SetStateAction} from 'react';
import { Input, VStack, Icon, Pressable } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';



interface LoginPasswordProps {
  password: string; 
  setPassword: Dispatch<SetStateAction<string>>;
}

const LoginPassword:React.FC<LoginPasswordProps> = ({
  password, 
  setPassword

}) => {
  const [show, setShow] = useState(false);

  return(
    <Input      
          w={{
            base: "75%",
            md: "25%"
           }} 
          value={password}
          onChangeText={ (password) => {
            setPassword(password);
          }}
          type={show ? "text" : "password"} 
          InputRightElement={<Pressable onPress={() => setShow(!show)}>
           <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} placeholder="        パスワード"
          variant="underlined" />
  )
   
};

export default LoginPassword