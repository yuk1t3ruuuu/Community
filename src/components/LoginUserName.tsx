import { Input, VStack, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';


const LoginUserName = () => {

  return(
       <Input w={{
                base: "75%",
                md: "25%"
              }} 
              InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} 
              placeholder="ユーザネーム"
              variant="underlined" />
              
  )
};

export default LoginUserName