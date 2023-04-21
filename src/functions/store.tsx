import AsyncStorage from '@react-native-async-storage/async-storage';
import { FormRegister } from '../components/Form/FormUserAcount/FormUserAcount';
import { FormProposal } from '../components/Form/FormClientUses/FormProposal';
import { setWithAsyncStorage, storeOnRespectiveLocal } from './setStoreFunctions/functions';
import { FormClient } from '../components/Form/FormClientUses/FormClientRegister';

export interface Proposals extends FormProposal {
    email: string
    progress?: string
    status?: string
}
export type storeData = (FormRegister | FormClient | Proposals[])


export interface Response<T> {
    error: boolean
    data?: T
    msg?: string
}

export type typeData = 'client' | 'user' | 'proposals'


export type dataInfo = FormRegister | FormClient | Proposals
//*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


export async function setToStorage(data: dataInfo, type: typeData) {
    const storageData = await getFromStorage(data, type)
    const key = `${data.email}_${type}`

    if (type === 'proposals') {

        return await storeOnRespectiveLocal(storageData, data, type, key)
    }
    else if (storageData.error === true) {

        return await storeOnRespectiveLocal(storageData.data, data, type, key)

    } else {
        return { error: true }
    }

}


export async function getFromStorage(data: dataInfo, type: typeData): Promise<Response<storeData>> {
    const key = `${data.email}_${type}`

    const resp = await AsyncStorage.getItem(key)
        .catch(error => console.log('get item error' + error))

    console.log('respons', resp)
    if (resp !== null) {
        const value = JSON.parse(resp)
        return { error: false, data: value }

    } else {
        return { error: true }

    }
}


export async function updateProposals(proposalList: Proposals[], extraInfo: { status: string, progress: string }, index: number): Promise<Response<Proposals[]>> {
    proposalList[index]['progress'] = extraInfo.progress
    proposalList[index]['status'] = extraInfo.status
    await setWithAsyncStorage({ proposals: proposalList }, `${proposalList[index].email}_proposals`)


    const proposalListUpdated = (await getFromStorage(proposalList[index], 'proposals')).data

    return { error: false, data: proposalListUpdated.proposals }
}