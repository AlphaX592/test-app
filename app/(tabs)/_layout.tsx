import '@/global.css';
import { Tabs } from "expo-router";
import { styled } from 'react-native-css';
import { SafeAreaView as RNsafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNsafeAreaView);

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={
        {
          headerShown: false
        }
      }  
    />
  );
}
