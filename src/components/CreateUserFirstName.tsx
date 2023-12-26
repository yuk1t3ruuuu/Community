import React, { useState,Dispatch, SetStateAction } from 'react';
import { Dimensions } from 'react-native';
import { FormControl, Input } from 'native-base';

interface CreateUserFirstNameProps {
  firstName: string; 
  setFirstName: Dispatch<SetStateAction<string>>;
}


const CreateUserFirstName: React.FC<CreateUserFirstNameProps> = ({
  firstName, 
  setFirstName
}) => {

  const width = Dimensions.get('window').width;


  return(
    <FormControl alignItems="center"  >        
      <Input
      bg="gray.100"
      placeholder='名前を入力'
      value={firstName}
      onChangeText={ (firstName) => {
        setFirstName(firstName);
      }}
      width={width - 40}
      marginX={20}
      />
    </FormControl>
  );
}

export default CreateUserFirstName;