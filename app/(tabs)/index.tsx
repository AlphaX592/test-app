import { HorizontalCompanyElement, VerticalCompanyCardElement } from "@/components/companyListComponents";
import { ListEmptyView } from "@/components/listEmpty";
import { Searchbar } from "@/components/searchbar";
import { companies } from "@/sampleData/sample_companies";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)


export default function App( ) {
  return (
    <SafeAreaView className="flex-1 w-full items-center m-0 p-0">
      <FlatList
          ListHeaderComponent={() => {
          return(
          <>   
            <View className="flex-1 items-center m-0 p-0">       
              <View className="w-full ml-auto mr-auto bg-green-300 h-50 border">
                <Text>Featured Business Here</Text>
              </View>
              <Searchbar/>
              <Text className="text-xl font-bold text-blue-500">
                Welcome to Nativewind
              </Text>
              <Link href="/(tabs)/businesses">
                Go to Businesses Page
              </Link>
              <Link href="/(tabs)/todos">
                Go to Todo List
              </Link>
              <View className="self-start p-2 m-2">
                <Text>Top Rated Businesses</Text>
              </View>
              <FlatList 
                className="w-full"
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                data={companies || []}
                ListEmptyComponent={ListEmptyView} 
                renderItem={({item}) => (
                  <HorizontalCompanyElement {...item}/>
                )}
              />  
            </View>
          </>)}}
          showsVerticalScrollIndicator={false}
          className="w-full m-0 p-0"
          keyExtractor={item => item.id.toString()}
          data={companies.filter(e => e.id < 5)}
          renderItem={({item}) => (
            <VerticalCompanyCardElement {...item}/>
          )}
          ListEmptyComponent={ListEmptyView} 
        />
      <View>
        <Text>
          test
        </Text>
      </View>
    </SafeAreaView>
  );
}
