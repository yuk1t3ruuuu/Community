import React, { Dispatch, SetStateAction } from 'react';
import { FormControl, Input } from 'native-base';
import { Dimensions } from 'react-native';



interface UserProfileDescProps {
  description: string; 
  setDescription: Dispatch<SetStateAction<string>>;
}


const UserProfileDesc: React.FC<UserProfileDescProps> = ({
  description, 
  setDescription
}) => {

  const width = Dimensions.get('window').width;

  return (
    <FormControl alignItems="center">          
      <Input 
        bg="gray.100"
        placeholder='プロフィール説明を入力'
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


export default UserProfileDesc;
