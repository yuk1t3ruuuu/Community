import React, {useState} from 'react';
import { Input, VStack, Icon, Pressable } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';


const LoginUserName = () => {

    const [show, setShow] = React.useState(false);

  return(
    <Input w={{
        base: "75%",
        md: "25%"
      }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
              <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} placeholder="        パスワード"
            variant="underlined" />

  )
   
};

export default LoginUserName