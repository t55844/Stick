import { FormClient } from "../components/Form/FormClientUses/FormClientRegister"
import { FormRegister } from "../components/Form/FormUserAcount/FormUserAcount"
import { Proposals, Response, getFromStorage, storeData, typeData } from "./store"

export interface loginData {
    email: string
    password: string
}

export async function makeLoguin(data: loginData, type: typeData): Promise<Response<storeData>> {
    const itemStored = await getFromStorage(data, type)

    if (itemStored.error) {
        return itemStored
    } else {
        return compareData(data, itemStored.data as FormClient | FormRegister)
    }
}


function compareData(data: loginData, store: FormClient | FormRegister): Response<FormClient | FormRegister> {
    if (store.email === data.email && store.password === data.password) {
        return { error: false, data: store }
    } else {
        return { error: true }

    }

}