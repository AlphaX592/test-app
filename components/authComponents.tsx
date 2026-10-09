import { Link } from "expo-router"
import { Text, View } from "react-native"

export const SignInOptions = () => {
    return (
        <View className="flex-row w-full border justify-end items-end">
            <SignInButton/>
            <SignUpButton/>
        </View>
    )
}

export const SignUpButton = () => {
    return (
        <View className="rounded w-20 bg-red-300">
            <Link href={'/auth/signup'}>
                <Text>
                    Sign up
                </Text>
            </Link>
        </View>
    )
} 

export const SignInButton = () => {
    return (
        <View className="rounded w-20 bg-blue-300">
            <Link href={'/auth/signin'}>
                <Text>
                    Sign in
                </Text>
            </Link>
        </View>
    )
} 