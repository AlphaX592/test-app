import { Link } from "expo-router"
import { Text } from "react-native"
import { styled } from "react-native-css"
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context"

const SafeAreaView = styled(RNSafeAreaView)

const SignUp = () => {
    return (
        <SafeAreaView>
            <Text> 
                This is the sign up page
            </Text>
            <Link href={'/'}>
                Go Home
            </Link>
            <Link href={'/auth/signin'}>
                SigIn Page
            </Link>
        </SafeAreaView>
    )
}

export default SignUp