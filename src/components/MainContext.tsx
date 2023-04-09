import React from "react";
import { setToStorage, getFromStorage } from "../functions/store";

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