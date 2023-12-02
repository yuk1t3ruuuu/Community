import React, {useState} from 'react';
import { VStack, HStack, Heading, IconButton, Icon, Box } from 'native-base';
import { Feather } from '@expo/vector-icons'; 
import CommunityNameInput from '../components/CommunityNameInput';
import CommunityDescInput from '../components/CommunityDescInput';
import CommunitySaveButton from '../components/CommunitySaveButton';

export default function CommunityCreateScreen() {
  
  const handleGoBack = () => {
    //前の画面に戻る処理
  };

  const [description, setDescription] = useState('');

  return(
    <VStack>
        <HStack alignItems="center" p={4} justifyContent="space-between" >
            <IconButton
            icon={<Icon as={Feather} name="arrow-left" />}
            onPress={handleGoBack}
            />
            <Heading size="lg">コミュニティ作成</Heading> 
            <Box w={50}></Box>
        </HStack>

        <HStack alignItems="flex-start">
          <Box w={100} h={100} bg="gray.200" ml={10} mb={10} />
        </HStack>

    <VStack flex={1} alignItems="center" space={4} mr={20}>
      <Box  w={200} h={100}>
        <CommunityNameInput /> 
      </Box>  
      <Box w={200} h={100}>
        <CommunityDescInput 
        description={description}
        setDescription={setDescription} /> 
      </Box>
      <Box w={200} h={100}>
        <CommunitySaveButton 
        description={description}/>
      </Box>
    </VStack>

  

    </VStack>
  )








}