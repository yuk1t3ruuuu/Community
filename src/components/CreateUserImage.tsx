import React,{Dispatch, SetStateAction} from 'react';
import {TouchableOpacity, View, StyleSheet, Platform, PermissionsAndroid, Linking, Alert, Image} from 'react-native';
import {ActionSheet} from 'react-native-cross-actionsheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';



interface CreateUserImageProps {
  image: string; 
  setImage: Dispatch<SetStateAction<string>>;
}

const CreateUserActionSheetPage: React.FC<CreateUserImageProps> = ({
  image, 
  setImage
}) => {
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
            buttonPositive: 'OK', 
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      return status === 'granted';
    }
  }

  const requestStoragePermission = async () => {

    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'App needs storage permission',  
            buttonPositive: 'OK', 
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      return status === 'granted'; 
    }
  
  }


  const openSettings = () => {
    if(Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      Linking.sendIntent('android.settings.APPLICATION_DETAILS_SETTINGS');
    }
  }


  const takePhoto = async () => {

    const cameraPermission = await requestCameraPermission();
  
    const storagePermission = 
      Platform.OS === 'android' ? 
       await requestStoragePermission() : true;
  
    if(cameraPermission && storagePermission) {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4,3],
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri); 
      }
      console.log(image);

    } else {
      Alert.alert(
        'Permission Required',
        'Camera and storage permissions are required to take photos',
        [
          {
            text: 'Open Settings',
            onPress: () => openSettings() 
          },
          {
            text: 'Cancel',
            style: 'cancel'
          }
        ]
      );
    }
  
  }


  
  const pickImage = async () => {
  
    const permission = 
      Platform.OS === 'android' ? 
       await requestStoragePermission() : true;
    
    if(permission) {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true ,
        aspect: [4,3]
      });
  
      if(!result.canceled) {
        setImage(result.assets[0].uri); 
      }
    }
  
  };

  const onPressAction = () => {
    return ActionSheet.options({
      options: [
       {text: '写真を撮る', onPress: () => takePhoto()},
       {text: '写真を選択', onPress: () => pickImage()},
      ],
       cancel: {text: 'キャンセル'},
    });
  };

    
      return (
        <View>
          <TouchableOpacity onPress={onPressAction}>
          {image ? (
            <Image style={styles.Photo} source={{uri:image}} ></Image>
          ) : (
            <View style={{...styles.iconButton, shadowColor: "#000",shadowOffset: {width: 0, height: 2},shadowOpacity: 0.2,shadowRadius: 2.0}}>
              <Icon style={styles.icon} name="user-o" size={70} />
              </View>
          )}
          </TouchableOpacity>
        </View>
      );
};



const styles = StyleSheet.create({
    iconButton: {
      borderWidth: 1,
      width: 100,
      height: 100,
      borderRadius: 25,
      marginLeft: 10,
      marginRight: 'auto',
      borderColor: 'white'
    },
    icon: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
      color:'#b3b3b3'
    },
    Photo: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginLeft: 10,
    }
  });

  export default CreateUserActionSheetPage;