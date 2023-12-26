import React, {useState, Dispatch, SetStateAction} from 'react';
import { Input, VStack, Icon, Pressable, FormControl } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';



interface CreateUserPasswordProps {
  password: string; 
  setPassword: Dispatch<SetStateAction<string>>;
}

const CreateUserPassword:React.FC<CreateUserPasswordProps> = ({
  password, 
  setPassword

}) => {
  const [show, setShow] = useState(false);
  const width = Dimensions.get('window').width;

  return(
    <FormControl alignItems="center">
      <Input     
          bg="gray.100"        
          value={password}
          onChangeText={ (password) => {
            setPassword(password);
          }}
          type={show ? "text" : "password"} 
          InputRightElement={<Pressable onPress={() => setShow(!show)}>
           <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} placeholder="        パスワード"
            width={width - 40}
            marginX={20}
           />
    </FormControl>
  )
   
};

export default CreateUserPassword