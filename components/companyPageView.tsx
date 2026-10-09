import { CompanyDetails } from "@/types/company"
import { Text, View } from "react-native"

const CompanyPageView = ( { companyName, number, address, email, service}:CompanyDetails) => {
    return (
        <View className="h-full w-full">
            <View className="w-full bg-yellow">
                <Text>
                    Company Photo here
                </Text>
            </View>
            <View className="w-full">
                <Text>Company Name: { companyName }</Text>
            </View>
            <View className="w-full">
                <Text>Service Provided: { service }</Text>
            </View>
            <View className="w-full">
                <Text>Address: { address }</Text>
                <Text>Email address: { email }</Text>
                <Text>Number: { number }</Text>
            </View>

        </View>
    )
}

export default CompanyPageView