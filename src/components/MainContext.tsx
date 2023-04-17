import React, { useState } from "react";
import { setToStorage, getFromStorage } from "../functions/store";
import { FormProposal } from "./Form/FormClientUses/FormProposal";

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
    Logout: (): void => { }
})

export default function MainContextProvider({ children }) {
    const [email, setEmail] = useState<string>('')
    const [userInfo, setUserInfo] = useState<userInfo>({ name: '' })
    const [clientInfo, setClientInfo] = useState<clientInfo>({
        name: '',
        companyName: '',
    })
    const [proposals, setProposals] = useState<Proposals[]>([])

    function Logout(): void {
        setEmail('')
        setUserInfo({ name: '' })
        setClientInfo({
            name: '',
            companyName: '',
        })
        setProposals([])
    }


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
            }}
        >
            {children}
        </MyContext.Provider>
    )
}   