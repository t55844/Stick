import AsyncStorage from '@react-native-async-storage/async-storage';
import { FormRegister } from '../components/Form/FormUserAcount/FormUserAcount';
import { FormClient } from '../components/Form/FormClientUses/FormClient';
import { FormProposal } from '../components/Form/FormClientUses/FormProposal';
import { storeOnRespectiveLocal } from './setStoreFunctions/functions';

export interface storeData {
    user: FormRegister
    client: FormClient
    proposals: FormProposal[]
}


export interface Response {
    error: boolean
    data?: any
    msg?: string
}

export type typeData = 'client' | 'user' | 'proposals'

export type dataInfo = FormRegister | FormClient | FormProposal
//*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


export async function setToStorage(data: dataInfo, type: typeData) {
    const storageData = await getFromStorage(data, type)
    const key = data.email

    if (storageData.error === true) {
        const dataModel: storeData = {
            user: '',
            client: '',
            proposals: []
        }
        return storeOnRespectiveLocal(dataModel, data, type, key)

    } else {
        return storeOnRespectiveLocal(storageData.data, data, type, key)
    }

}


export async function getFromStorage(data: dataInfo, type: typeData): Promise<Response> {
    const key = data.email
    const resp = await AsyncStorage.getItem(key)
        .catch(error => console.log('get item error' + error))
    if (resp !== null) {

        const value = JSON.parse(resp)
        return { error: false, data: value }
    } else {
        return { error: true, }

    }
}
