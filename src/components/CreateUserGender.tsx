import { VStack, Select, CheckIcon, Text } from "native-base";
import { useState, Dispatch, SetStateAction } from "react";
import { Dimensions } from 'react-native';

 export enum Gender {
  men = '0',
  women = '1'  
}


interface CreateUserGenderProps {
    selectedGender: Gender; 
    setSelectedGender: Dispatch<SetStateAction<string>>;
  }

  const CreateUserGender: React.FC<CreateUserGenderProps> = ({
    selectedGender: selectedGender, 
    setSelectedGender: setSelectedGender
  }) => {

    const width = Dimensions.get('window').width;

  return (
    <VStack alignItems="center">
      <Select
        width={width - 40}
        marginX={20}
        selectedValue={selectedGender}
        minWidth="200"
        onValueChange={(itemValue) => setSelectedGender(itemValue)} 
        _selectedItem={{ endIcon: <CheckIcon size="5" /> }}
      >
        <Select.Item label="男性" value={Gender.men} />  
        <Select.Item label="女性" value={Gender.women} />
      </Select>
    </VStack>
  );
}

export default CreateUserGender;