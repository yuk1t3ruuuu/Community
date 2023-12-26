import React from 'react';
import { Button } from 'native-base';
import { Gender } from '../components/CreateUserGender';


interface CreateUserButtonProps {
  firstName: string;
  lastName: string
  description: string; 
  image: string;
  email: string;
  password: string
  selectedGender: Gender
}


const CreateUserButton: React.FC<CreateUserButtonProps> = ({
  firstName,
  lastName,
  description,
  image,
  email,
  password,
  selectedGender
  
}) => {
  const handlePress = () => {}

  const canSave = firstName.length > 1 && lastName.length > 1 && image && email.length > 1 && password.length > 1 && selectedGender;

  


  return(
    <Button
      bg={canSave ? '#3E8E41' : '#AAA'}
      isDisabled={!canSave}
      rounded="full"
      _pressed={{ bg: '#BCEAD5' }}
      onPress={handlePress}   
      colorScheme="light" 
    
    >
      保存
    </Button>
  );


}

export default CreateUserButton;