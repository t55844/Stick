import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { MyContext } from '../MainContext';
import LogoutButton from './LogoutButton';

const LoggedInUserInfo = () => {
    const { userInfo, clientInfo } = useContext(MyContext);

    if (userInfo.name !== '') {
        return (
            <AvatarBox name={userInfo.name} />
        );
    }
    else if (clientInfo.name !== '') {
        return <AvatarBox name={clientInfo.name} />
    }

};


function AvatarBox(props: { name: string }) {
    const { name } = props
    const { Logout } = useContext(MyContext);

    return (

        <View className="flex flex-row ki justify-center items-center bg-primary-200">
            <View className='w-9/12 flex flex-row justify-center items-center space-x-4 p-2'>

                <View className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <Text className="font-medium text-gray-600 dark:text-gray-300">{name[0] + name[1]}</Text>
                </View>
                <View className="font-medium dark:text-white">
                    <Text className="text-sm text-gray-500 dark:text-gray-400">{name}</Text>
                </View>
            </View>
            <LogoutButton onPress={Logout} />
        </View>
    )
}

export default LoggedInUserInfo;