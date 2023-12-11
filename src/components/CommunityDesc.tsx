import React, { Dispatch, SetStateAction } from 'react';
import { FormControl, Input } from 'native-base';
import { Dimensions } from 'react-native';



interface CommunityDescProps {
  description: string; 
  setDescription: Dispatch<SetStateAction<string>>;
}


const CommunityDesc: React.FC<CommunityDescProps> = ({
  description, 
  setDescription
}) => {

  const width = Dimensions.get('window').width;

  return (
    <FormControl alignItems="center">          
      <Input 
        bg="gray.100"
        placeholder='コミュニティー説明を入力'
        value={description}
        onChangeText={setDescription}
        numberOfLines={4}
        multiline={true}
        height={70}
        width={width - 40}
        marginX={20}
      />

    </FormControl>
  );
}


export default CommunityDesc;
