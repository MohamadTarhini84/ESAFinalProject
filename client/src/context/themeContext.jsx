import { createContext, useState } from "react";

export const themeContext=createContext(null)

export function ThemeContextProvider({children}){
    const [theme, setTheme]=useState("light")

    return (
        <themeContext.Provider value={{theme, setTheme}}>
            {children}
        </themeContext.Provider>
    )
}