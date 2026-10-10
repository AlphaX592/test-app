import clsx from "clsx";
import { useState } from "react";
import { TextInput } from "react-native";

export const Searchbar = () => {
    const [search, setSearch] = useState("")
    const [isfocused, setIsFocused] = useState(false)

    return (
        <TextInput
            className={clsx("w-9/10 ml-auto mr-auto mt-2 border-b p-2 outline-none", isfocused && "border-green-300", !isfocused && "border-red-300")}
            placeholder="Search..." 
            underlineColorAndroid="transparent"
            showSoftInputOnFocus={true}
            onChangeText={() =>setSearch}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            > 
              
        </TextInput>
            
    )
};

