import React from 'react';
import { Button } from 'native-base';



interface CommunitySaveButtonProps {
  name: string;
  description: string; 
  image: string;
}


const CommunitySaveButton: React.FC<CommunitySaveButtonProps> = ({
  name,
  description,
  image
  
}) => {
  const handlePress = () => {}

  const canSave = name.length > 2 && image;

  


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

export default CommunitySaveButton;