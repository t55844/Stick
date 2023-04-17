import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames';

interface LogoutButtonProps {
    onPress(): void
}

const LogoutButton = (props: LogoutButtonProps) => {
    const { onPress } = props
    return (
        <TouchableOpacity onPress={onPress}>
            <View className={`bg-red-500 rounded-full p-2 items-center justify-center  `}>
                <Feather name="log-out" size={20} color="white" />
            </View>
        </TouchableOpacity>
    );
};

export default LogoutButton;