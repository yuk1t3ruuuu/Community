import React, { useState,Dispatch, SetStateAction } from 'react';
import { Dimensions } from 'react-native';
import { FormControl, Input } from 'native-base';

interface CommunityNameProps {
  name: string; 
  setName: Dispatch<SetStateAction<string>>;
}


const CommunityName: React.FC<CommunityNameProps> = ({
  name, 
  setName
}) => {

  const [isInvalid, setInvaild] = useState(false);
  const width = Dimensions.get('window').width;

  const checkValidation = (name) => {
    if (name.length < 3){
        setInvaild(true);
    } else {
        setInvaild(false);
    }
  }

  return(
    <FormControl alignItems="center" isInvalid={isInvalid} >        
      <Input
      bg="gray.100"
      placeholder='コミュニティー名を入力'
      value={name}
      onChangeText={ (name) => {
        setName(name);
        checkValidation(name);
      }}
      width={width - 40}
      marginX={20}
      />
      <FormControl.ErrorMessage>3文字以上で入力してください</FormControl.ErrorMessage>
    </FormControl>
  );
}

export default CommunityName;