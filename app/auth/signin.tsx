import { Link } from "expo-router"
import { Text } from "react-native"
import { styled } from "react-native-css"
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context"

const SafeAreaView = styled(RNSafeAreaView)

const SignIn = () => {
    return (
        <SafeAreaView>
            <Text> 
                This is the sign in page
            </Text>
            <Link href={'/'}>
                Go Home
            </Link>
            <Link href={'/auth/signup'}>
                SignUp Page
            </Link>
        </SafeAreaView>
    )
}

export default SignIn