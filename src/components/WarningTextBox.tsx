import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function WarningTextBox(props: { text: string, duration?: number }) {
    const [show, setShow] = useState<boolean>(true)
    const { text, duration } = props

    useEffect(() => {
        setTimeout(() =>
            setShow(false), duration | 6000)
    }, [])

    if (show) {
        return (
            <View className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-00" role="alert">
                <Text className=" text-red-600">
                    <Text className="font-medium text-red-900">Alert!</Text> {text}
                </Text>
            </View>

        )
    } else {
        return (
            <View></View>
        )
    }

}