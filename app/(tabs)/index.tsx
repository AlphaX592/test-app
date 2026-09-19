import BusinessCard from "@/components/businessCard";
import Searchbar from "@/components/searchbar";
import { companies } from "@/sampleData/sample_companies";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center">
      <View className="w-9/10 ml-auto mr-auto bg-green-300 h-50 border">
        <Text>Featured Business Here</Text>
      </View>
      <Searchbar/>
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind
      </Text>
      <Link href="/(tabs)/businesses">
        Go to Businesses Page
      </Link>
      <ScrollView className="w-8/10">
        {companies && companies.map(c => (<BusinessCard key={c.companyName} companyName={c.companyName} email={c.email} number={c.number} service={c.service} address={c.address}/>))}
      </ScrollView>
    </SafeAreaView>
  );
}
