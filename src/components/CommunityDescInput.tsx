import React, { Dispatch, SetStateAction } from 'react';
import { FormControl, Input } from 'native-base';



interface CommunityDescInputProps {
  description: string; 
  setDescription: Dispatch<SetStateAction<string>>;
}


const CommunityDescInput: React.FC<CommunityDescInputProps> = ({
  description, 
  setDescription
}) => {

  return (
    <FormControl>        
      <FormControl.Label>コミュニティ説明</FormControl.Label>  
      
      <Input 
        value={description}
        onChangeText={setDescription}
        numberOfLines={4}
        multiline={true}
        height={60}
      />

    </FormControl>
  );
}


export default CommunityDescInput;
