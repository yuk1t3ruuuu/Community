import React, { Dispatch, SetStateAction } from 'react';
import { FormControl, Input } from 'native-base';
import { Dimensions } from 'react-native';



interface CreateUserDescProps {
  description: string; 
  setDescription: Dispatch<SetStateAction<string>>;
}


const CreateUserDesc: React.FC<CreateUserDescProps> = ({
  description, 
  setDescription
}) => {

  const width = Dimensions.get('window').width;

  return (
    <FormControl alignItems="center">          
      <Input 
        bg="gray.100"
        placeholder='自己紹介を入力'
        value={description}
        onChangeText={ (description) => {
          setDescription(description);
        }}
        numberOfLines={4}
        multiline={true}
        height={70}
        width={width - 40}
        marginX={20}
      />

    </FormControl>
  );
}


export default CreateUserDesc;
