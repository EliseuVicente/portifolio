import { createContext, useState } from "react";

export const Context = createContext({ })

export function ContextProvider({children}){

    const [DarkTheme, setDarkTheme] = useState(false)
    
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