import { createContext, useState } from "react";

export const Context = createContext({ })

export function ContextProvider({children}){

    const [DarkTheme, setDarkTheme] = useState(true)
    
    return (
        <Context.Provider
            value={{
                DarkTheme, 
                setDarkTheme
            }}>
                {children}
            </Context.Provider>
    )
}