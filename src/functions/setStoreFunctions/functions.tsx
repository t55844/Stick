import AsyncStorage from "@react-native-async-storage/async-storage"
import { Proposals, Response, dataInfo, setToStorage, storeData, typeData } from "../store"
import { FormRegister } from "../../components/Form/FormUserAcount/FormUserAcount"
import { FormClient } from "../../components/Form/FormClientUses/FormClientRegister"

export async function setWithAsyncStorage(data: storeData, key: string): Promise<Response<FormClient | FormRegister>> {

    await AsyncStorage.setItem(
        key, JSON.stringify(
            data
        ))
        .catch(error => console.log(error))
    return { error: false, msg: 'data successfuly stored' }
}

export async function storeOnRespectiveLocal(storeData: storeData, data: dataInfo, type: typeData, key: string): Promise<Response<storeData>> {

    switch (type) {
        case 'user':
            return await setWithAsyncStorage(data, key)

        case 'client':
            return await setWithAsyncStorage(data, key)

        case 'proposals':
            const dataToStore = storeData.error ? [data] : [...storeData.data.proposals, data]
            return await setWithAsyncStorage({ proposals: dataToStore }, key)

        default:
            return { error: true, msg: 'type does not exist' }
    }
}
