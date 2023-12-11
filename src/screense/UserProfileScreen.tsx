import React, {useState} from 'react';
import { Dimensions } from 'react-native';
import { VStack, HStack, Heading, IconButton, Icon, Box, Text, View } from 'native-base';
import { Feather } from '@expo/vector-icons'; 
import UserProfileDesc from '../components/UserProfileDesc';
import UserProfileName from '../components/UserProfileName';
import UserProfileActionSheetPage from '../components/UserProfileImage';
import UserProfileSaveButton from '../components/UserProfileSaveButton';


export default function CommunityCreateScreen() {
  
  const handleGoBack = () => {
    //前の画面に戻る処理
  };

  const [name, setName] = useState('')
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const width = Dimensions.get('window').width;

  return(
    <VStack>
        <HStack alignItems="center" p={4} justifyContent="space-between" >
            <IconButton
            icon={<Icon as={Feather} name="arrow-left"  color={'#3E8E41'} />}
            onPress={handleGoBack}
            />
            <Heading size="lg">ユーザープロフィール</Heading> 
            <Box w={50}></Box>
        </HStack>


        <HStack alignItems="flex-start">
        <UserProfileActionSheetPage
        image={image}
        setImage={setImage}/>
        </HStack>



      <Box w={25} h={25}></Box>


      <Box  w={width} h={100}>
        <Text style={{fontWeight: "bold", marginLeft: 20}}>ユーザー名</Text>
        <UserProfileName 
        name={name}
        setName={setName}/> 
      </Box> 



      <Box w={25} h={25}></Box>


      <Box w={width} h={100}>
        <Text style={{fontWeight: "bold", marginLeft: 20}}>自己紹介</Text>
        <UserProfileDesc 
          description={description}
          setDescription={setDescription} /> 
      </Box>



      <Box w={50} h={50}></Box>


      <View alignItems="center">
        <Box w={150} h={100}>
          <UserProfileSaveButton
          name={name}
          description={description}
          image={image}
          />
        </Box>
      </View>


    </VStack>
  )








}