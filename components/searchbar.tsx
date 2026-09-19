import { useState } from "react";
import { TextInput } from "react-native";

const Searchbar = () => {
    const [search, setSearch] = useState("")


    return (
        <TextInput
            className="w-9/10 ml-auto mr-auto mt-2 border-b border-red-300 p-2"
            placeholder="Search..." 
            onChangeText={()=>setSearch}>   
        </TextInput>
            
    )
};

export default Searchbar