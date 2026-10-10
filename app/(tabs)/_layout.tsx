import '@/global.css';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={
        {
          headerShown: false
        }
      }  
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="businesses" options={{ title: 'Businesses' }} />
      <Tabs.Screen name="todos" options={{ title: 'Todos' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
    </Tabs>
  );
}
