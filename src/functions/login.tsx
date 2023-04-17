import { Response, getFromStorage, storeData, typeData } from "./store"

export interface loginData {
    email: string
    password: string
}

export async function makeLoguin(data: loginData, type: typeData): Promise<Response> {
    const itemStored = await getFromStorage(data, type)

    if (itemStored.error) {
        return itemStored
    } else {
        return compareData(data, type, itemStored.data)
    }
}


function compareData(data: loginData, type: typeData, store: storeData): Response {

    if (store[type].email === data.email && store[type].password === data.password) {
        console.log(data.email === store[type].email)
        console.log(store)
        return { error: false, data: store[type] }
    } else {
        return { error: true }

    }

}