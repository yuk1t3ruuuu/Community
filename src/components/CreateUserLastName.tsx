import React, { useState,Dispatch, SetStateAction } from 'react';
import { Dimensions } from 'react-native';
import { FormControl, Input } from 'native-base';

interface CreateUserLastNameProps {
  lastName: string; 
  setLastName: Dispatch<SetStateAction<string>>;
}


const CreateUserLastName: React.FC<CreateUserLastNameProps> = ({
  lastName: lastName, 
  setLastName: setLastName
}) => {


  const width = Dimensions.get('window').width;



  return(
    <FormControl alignItems="center"  >        
      <Input
      bg="gray.100"
      placeholder='名字を入力'
      value={lastName}
      onChangeText={ (lastName) => {
        setLastName(lastName);
      }}
      width={width - 40}
      marginX={20}
      />
    </FormControl>
  );
}

export default CreateUserLastName;