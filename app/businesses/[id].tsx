import CompanyPageView from "@/components/companyPageView";
import { companies } from "@/sampleData/sample_companies";
import { useLocalSearchParams } from "expo-router";
import { styled } from "react-native-css";
import { SafeAreaView as RNSafeAreView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreView)

const CompanyPage = () => {
    
    const { id } = useLocalSearchParams<{ id:string }>();
    const company = companies.find(c => c.id === Number(id));
    // const company = companies[3];
    return (
        <SafeAreaView>
            {company && <CompanyPageView {...company} />}
        </SafeAreaView>
    )
}

export default CompanyPage