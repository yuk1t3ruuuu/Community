import React, { useState } from 'react';
import { FormControl, Input } from 'native-base';

const CommunityNameInput = () => {

  const [name, setName] = useState('');
  const [isInvalid, setInvaild] = useState(true);

  const checkValidation = (name) => {
    if (name.length < 3){
        setInvaild(true);
    } else {
        setInvaild(false);
    }
  }

  return(
    <FormControl isInvalid={name.length < 3}>       
      <FormControl.Label>コミュニティー名</FormControl.Label>  
      <Input
      placeholder='コミュニティー名'
      value={name}
      onChangeText={ (name) => {
        setName(name);
        checkValidation(name);
      }}
      marginBottom={3}
      />
      <FormControl.ErrorMessage>3文字以上で入力してください</FormControl.ErrorMessage>
    </FormControl>
  );
}

export default CommunityNameInput;