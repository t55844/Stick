import React, { useEffect, useState } from "react";
import { FormProposal } from "./Form/FormClientUses/FormProposal";
import { getFromStorage } from "../functions/store";

interface userInfo {
    name: string
}

interface clientInfo {
    name: string
    companyName: string
}

interface Proposals extends FormProposal {
    progress?: string
}

export const MyContext = React.createContext({
    email: '',
    setEmail: (email: string): void => { },
    userInfo: { name: '' },
    setUserInfo: (user: userInfo): void => { },
    clientInfo: { name: '', companyName: '' },
    setClientInfo: (clientInfo: clientInfo) => void {},
    proposals: [],
    setProposals: (proposals: Proposals[]) => void {},
    Logout: (): void => { },
    snackbackBar: { visibility: false, type: 'failed', msg: '' },
    showSnackbackBar: (msg: string, type: 'failed' | 'success', time?: number) => void {}
})

export default function MainContextProvider({ children }) {
    const [email, setEmail] = useState<string>('')
    const [userInfo, setUserInfo] = useState<userInfo>({ name: '' })
    const [clientInfo, setClientInfo] = useState<clientInfo>({
        name: '',
        companyName: '',
    })
    const [proposals, setProposals] = useState<Proposals[]>([])
    const [snackbackBar, setSnackbackBar] = useState<{ visibility: boolean, type: 'failed' | 'success', msg: string }>({ visibility: false, type: 'failed', msg: '' })

    function Logout(): void {
        setEmail('')
        setUserInfo({ name: '' })
        setClientInfo({
            name: '',
            companyName: '',
        })
        setProposals([])
    }

    function showSnackbackBar(msg: string, type: 'failed' | 'success', time?: number) {
        setSnackbackBar({ msg, type, visibility: true })
        setTimeout(() => setSnackbackBar({ msg: '', type, visibility: false }), time | 4000)
    }

    useEffect(() => async () => {
        const resp = await getFromStorage({ email }, 'proposals')
        if (!resp.error) {
            setProposals(resp.data.proposals)
        }

    }, [email])

    return (
        <MyContext.Provider
            value={{
                email,
                setEmail,
                userInfo,
                setUserInfo,
                clientInfo,
                setClientInfo,
                proposals,
                setProposals,
                Logout,
                snackbackBar,
                showSnackbackBar
            }}
        >
            {children}
        </MyContext.Provider>
    )
}   