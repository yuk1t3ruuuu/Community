import React, {useState} from 'react';
import { Dimensions } from 'react-native';
import { VStack, HStack, Heading, IconButton, Icon, Box, Text, View } from 'native-base';
import { Feather } from '@expo/vector-icons'; 
import CommunityName from '../src/components/CommunityName';
import CommunityDesc from '../src/components/CommunityDesc';
import CommunitySaveButton from '../src/components/CommunitySaveButton';
import CommunityActionSheetPage from '../src/components/CommunityImage';


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
            icon={<Icon as={Feather} name="arrow-left" color={'#3E8E41'} />}
            onPress={handleGoBack}
        
            />
            <Heading size="lg">コミュニティ作成</Heading> 
            <Box w={50}></Box>
        </HStack>


        <HStack alignItems="flex-start">
        <CommunityActionSheetPage
        image={image}
        setImage={setImage}/>
        </HStack>



      <Box w={25} h={25}></Box>


      <Box  w={width} h={100}>
        <Text style={{fontWeight: "bold", marginLeft: 20}}>コミュニティー名</Text>
        <CommunityName 
        name={name}
        setName={setName}/> 
      </Box> 



      <Box w={25} h={25}></Box>


      <Box w={width} h={100}>
        <Text style={{fontWeight: "bold", marginLeft: 20}}>コミュニティー説明</Text>
        <CommunityDesc 
          description={description}
          setDescription={setDescription} /> 
      </Box>



      <Box w={50} h={50}></Box>


      <View alignItems="center">
        <Box w={150} h={100}>
          <CommunitySaveButton 
          name={name}
          description={description}
          image={image}
          />
        </Box>
      </View>


    </VStack>
  )








}