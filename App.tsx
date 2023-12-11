import React from 'react';
import CommunityCreateScreen from './src/screense/CommunityCreateScreen';
import UserProfileScree from './src/screense/UserProfileScreen';
import LoginOrSignupScreen from './src/screense/LoginOrSignupScreen';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaView } from 'react-native';


export default function App() {
  return (
      <NativeBaseProvider>
        <SafeAreaView style={{flex: 1}}>
          <LoginOrSignupScreen/>
        </SafeAreaView>
      </NativeBaseProvider>
  );
}