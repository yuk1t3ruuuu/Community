import React from 'react';
import { Button } from 'native-base';



interface CommunitySaveButtonProps {
  description: string; 
}


const CommunitySaveButton: React.FC<CommunitySaveButtonProps> = ({
  description, 
}) => {
  const handlePress = () => {
    fetch('api/community/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image: "image.jpg",
        name: "Community Name", 
        description: description,
        user_id: "1234abcd" 
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data); 
    });
  }

  return(
    <Button
      style={{backgroundColor: '#0066FF'}} //ボタンのデザインは後に修正
      rounded="sm"
      _pressed={{ bg: '#004080' }}
      onPress={handlePress}    
    >
      コミュニティ情報を保存
    </Button>
  );


}

export default CommunitySaveButton;