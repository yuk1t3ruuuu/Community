import React, {useState} from 'react';
import { Dimensions } from 'react-native';
import { VStack, HStack, Heading, IconButton, Icon, Box, Text, View } from 'native-base';
import { Gender } from '../src/components/CreateUserGender';
import CreateUserActionSheetPage from '../src/components/CreateUserImage';
import CreateUserFirstName from '../src/components/CreateUserFirstName';
import CreateUserLastName from '../src/components/CreateUserLastName';
import CreateUserDesc from '../src/components/CreateUserDesc';
import CreateUserEmail from '../src/components/CreateUserEmail';
import CreateUserPassword from '../src/components/CreateUserPassword';
import CreateUserGender from '../src/components/CreateUserGender';
import CreateUserButton from '../src/components/CreateUserButton';



export default function UserCreateScreen() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedGender, setSelectedGender] = useState(Gender.men);

    const width = Dimensions.get('window').width;


    return(
      <VStack>
        <HStack justifyContent="center" >
            <Heading size="lg">新規登録</Heading> 
        </HStack>

        <HStack alignItems="flex-start">
        <CreateUserActionSheetPage
        image={image}
        setImage={setImage}/>
        </HStack>

        <Box w={25} h={25}></Box>

        <Box  w={width} h={100}>
        <Text style={{fontWeight: "bold", marginLeft: 20}}>名前</Text>
        <CreateUserFirstName
        firstName={firstName}
        setFirstName={setFirstName}/> 
      </Box> 

      <Box  w={width} h={100}>
        <Text style={{fontWeight: "bold", marginLeft: 20}}>名字</Text>
        <CreateUserLastName
        lastName={lastName}
        setLastName={setLastName}/> 
      </Box> 

      <Box w={width} h={100}>
        <Text style={{fontWeight: "bold", marginLeft: 20}}>自己紹介</Text>
        <CreateUserDesc
          description={description}
          setDescription={setDescription} /> 
      </Box>

      <Box w={20} h={10}></Box>

      <Box w={width} h={100}>
        <Text style={{fontWeight: "bold", marginLeft: 20}}>メールアドレス</Text>
        <CreateUserEmail
          email={email}
          setEmail={setEmail} /> 
      </Box>

      <Box w={width} h={100}>
        <Text style={{fontWeight: "bold", marginLeft: 20}}>パスワード</Text>
        <CreateUserPassword
          password={password}
          setPassword={setPassword} /> 
      </Box>

      <Box w={width} h={100}>
        <Text style={{fontWeight: "bold", marginLeft: 20}}>性別</Text>
        <CreateUserGender
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender} /> 
      </Box>

      <View alignItems="center">
        <Box w={150} h={100}>
          <CreateUserButton
          firstName={firstName}
          lastName={lastName}
          description={description}
          image={image}
          email={email}
          password={password}
          selectedGender={selectedGender}
          />
        </Box>
      </View>























        
      </VStack>









    )










}