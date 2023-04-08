import React from 'react';
import { Button as NButton, View } from 'react-native'

interface PropsButton {
    title: string
    onPress()
}

export default function Button(props: PropsButton) {
    const { title, onPress } = props
    return (
        <View className='w-1/2 mr-auto ml-auto mt-3'>
            <NButton color={'#3182CE'} title={title} onPress={onPress} />
        </View>
    )
}
