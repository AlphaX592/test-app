import { SignInOptions } from '@/components/authComponents';
import '@/global.css';
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
        <SignInOptions/>
        <Stack screenOptions={
            {
            headerShown: false
            }
        }/>
    </>
  );
}