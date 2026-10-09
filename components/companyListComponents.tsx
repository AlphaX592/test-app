import { companies } from "@/sampleData/sample_companies";
import { CompanyDetails } from "@/types/company";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export const VerticalCompanyCardElement = ( {id, companyName, number, service, email, address} : CompanyDetails) => {
    return (
        <Link href={`/businesses/${id}`}>
            <View className="w-auto border bg-blue-300 p-5 rounded mr-5 ml-5 mt-2 mb-2">
                <Text>Company name: {companyName}</Text>
                <Text>Number: {number}</Text>
                <Text>Email: {email}</Text>
                <Text>Location: {address}</Text>
                <Text>Service: {service}</Text>
            </View>
        </Link>
    )
} 

export const HorizontalCompanyElement = ( {id, companyName, number, service, email, address} : CompanyDetails) => {
    return (
        <Link href={`/businesses/${id}`}>
            <View className="border bg-gray-300 max-h-50 p-3 w-50 rounded m-2">
                <Text>Company name: {companyName}</Text>
                <Text>Number: {number}</Text>
                <Text>Email: {email}</Text>
                <Text>Location: {address}</Text>
                <Text>Service: {service}</Text>
            </View>
        </Link>
    )
} 
 

export const FilteredBusinessList = ( {companyName, number, service, email, address}: CompanyDetails) => {

    return (
        <View className="flex-1 w-full">
            {
                companies.filter(company => company.id < 6).map((company) => (<VerticalCompanyCardElement {...company}/>))
            }
        </View>
    )
}