import React from "react";
import { Text } from "react-native";

export default function TitleOfSection(props: { text: string }) {
    const { text } = props
    return (

        <Text className='text-2xl font-bold w-full text-center m-auto pb-4 pt-2 border-b-4 border-primary-500 '>
            {text}
        </Text>
    )
}