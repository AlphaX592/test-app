import { Company } from "@/types/company";
import { Text, View } from "react-native";

type CompanyCardProps = {
  village: string;
};

const BusinessCard = ( {companyName, number, service, email, address} : Company) => {
    return (
        <View className="border bg-blue-300 p-3 rounded m-2">
            <Text>Company name: {companyName}</Text>
            <Text>Number: {number}</Text>
            <Text>Email: {email}</Text>
            <Text>Location: {address}</Text>
            <Text>Service: {service}</Text>
        </View>
    )
} 

export default BusinessCard