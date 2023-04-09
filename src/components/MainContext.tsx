import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FormLogin } from "./Form/FormLogin/FormLogin";

export interface Response {
    error: boolean
    data?: FormLogin
}


async function setToStorage(data: FormLogin, storageKey: 'login') {
    const storageData = await getFromStorage(storageKey, data)
    const key = `${storageKey}_${data.email}`

    if (storageData.error === true) {

        await AsyncStorage.setItem(key, JSON.stringify(data))
            .catch(error => console.log(error))

        return { error: false }
    } else {
        return { error: true }
    }

}

async function getFromStorage(storageKey: string, data: FormLogin): Promise<Response> {

    const key = `${storageKey}_${data.email}`
    const resp = await AsyncStorage.getItem(key)
        .catch(error => console.log(error))

    if (resp !== null) {
        const value = JSON.parse(resp)
        return { error: false, data: value }
    } else {
        return { error: true, }

    }
}

export const MyContext = React.createContext({
    setToStorage,
    getFromStorage
})

export default function MainContextProvider({ children }) {

    return (
        <MyContext.Provider
            value={
                { getFromStorage, setToStorage }
            }
        >
            {children}
        </MyContext.Provider>
    )
}