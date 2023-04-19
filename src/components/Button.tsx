import React from 'react';
import { Button as NButton, View } from 'react-native'

interface PropsButton {
    title: string
    onPress(),
    width?: string
}

export default function Button(props: PropsButton) {
    const { title, onPress, width } = props
    return (
        <View className={`${width ? width : 'w-1/2'} mr-auto ml-auto mb-3 mt-3`}>
            <NButton color={'#3182CE'} title={title} onPress={onPress} />
        </View>
    )
}
