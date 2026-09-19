import { Link } from 'expo-router';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Businesses = ( name: string ) => {
return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
        <Text>
            This is in a safe area view
        </Text>
        <Link href="..">
            Go Home
        </Link>
    </SafeAreaView>
) 
} 

export default Businesses