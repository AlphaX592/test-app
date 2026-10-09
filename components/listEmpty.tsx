import { Text, View } from "react-native"


export const ListEmptyView = () => {
    return (
        <View className="flex justify-center items-center rounded bg-gray-300 pt-20 pb-20 h-50 w-full m-5 border">
            <Text>
                There are no companies to be displayed
            </Text>
        </View>
    )
}