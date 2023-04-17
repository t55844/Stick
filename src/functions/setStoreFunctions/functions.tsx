import AsyncStorage from "@react-native-async-storage/async-storage"
import { FormProposal } from "../../components/Form/FormClientUses/FormProposal"
import { Response, dataInfo, storeData, typeData } from "../store"

async function setWithAsyncStorage(storeData: storeData, type: typeData, data: dataInfo, key: string): Promise<Response> {
    if (storeData[type] === '') {
        storeData[type] = data

        await AsyncStorage.setItem(
            key, JSON.stringify(
                storeData
            ))
            .catch(error => console.log(error))
        return { error: false, msg: 'data successfuly stored' }
    } else {
        return {
            error: true, msg: 'data  already been stored'
        }
    }
}

export async function storeOnRespectiveLocal(storeData: storeData, data: dataInfo, type: typeData, key: string): Promise<Response> {

    switch (type) {
        case 'user':
            return await setWithAsyncStorage(storeData, type, data, key)

        case 'client':
            return await setWithAsyncStorage(storeData, type, data, key)

        case 'proposals':
            storeData[type].push(data as FormProposal)
            await AsyncStorage.setItem(
                key, JSON.stringify(
                    storeData
                ))
                .catch(error => console.log(error))

            return { error: false }
        default:
            return { error: true, msg: 'type does not exist' }
    }
}
