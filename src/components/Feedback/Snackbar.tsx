import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { MyContext } from '../MainContext';


export default function Snackbar() {

    const { snackbackBar } = useContext(MyContext)

    const color =
        snackbackBar.type === 'failed' ? '"bg-orange-100  border-orange-500 text-orange-700' :
            snackbackBar.type === 'success' ? 'bg-teal-100 border-teal-500  text-teal-900' :
                null
    if (snackbackBar.visibility === true) {

        return (
            <View
                className={` w-11/12 bg-red-100 border m-auto mt-2 mb-2 ${color} px-4 py-3 rounded " role="alert`}>
                <Text className="font-bold">{snackbackBar.msg}</Text>
            </View>
        )
    } else {
        return null
    }
}