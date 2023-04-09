import React from 'react';
import { Text, View } from 'react-native';


export default function Snackbar(props: { text: string, type: 'failed' | 'success' }) {
    const { text, type } = props

    const color =
        type === 'failed' ? '"bg-orange-100  border-orange-500 text-orange-700' :
            type === 'success' ? 'bg-teal-100 border-teal-500  text-teal-900' :
                null

    return (
        <View className={`bg-red-100 border w-3/4 m-auto mt-2 mb-2 ${color} px-4 py-3 rounded relative" role="alert`}>
            <Text className="font-bold">{text}</Text>
        </View>
    )
}