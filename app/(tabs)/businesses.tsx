import { VerticalCompanyCardElement } from '@/components/companyListComponents';
import { ListEmptyView } from '@/components/listEmpty';
import { companies } from '@/sampleData/sample_companies';
import { FlatList, Text, View } from 'react-native';
import { styled } from 'react-native-css';
import { SafeAreaView as RNSafeAreView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreView)
const Businesses = () => {
return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white-300">
        <FlatList 
            className='w-full'
            showsVerticalScrollIndicator={false}
            data={companies || []}
            keyExtractor={(item)=> item.id.toString()}
            renderItem={({item})=> (
                <VerticalCompanyCardElement {...item}/>
                
            )}
            ListEmptyComponent={ListEmptyView}
        />
        <View>
            <Text>
                Test
            </Text>
        </View>
    </SafeAreaView>
) 
} 

export default Businesses