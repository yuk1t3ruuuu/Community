import React from 'react';
import CommunityCreateScreen from './app/CommunityCreateScreen';
import UserProfileScree from './app/UserProfileScreen';
import LoginOrSignupScreen from './app/LoginOrSignupScreen';
import CreateUserGender from './src/components/CreateUserGender';
import UserCreateScreen from './app/UserCreateScreen';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaView } from 'react-native';


export default function App() {
  return (
      <NativeBaseProvider>
        <SafeAreaView style={{flex: 1}}>
        <UserCreateScreen/>
        </SafeAreaView>
      </NativeBaseProvider>
  );
}