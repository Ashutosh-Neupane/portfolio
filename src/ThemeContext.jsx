import { createContext,useState} from "react";
export const ThemeContext = createContext();
//true=light,false=dark
export const ThemeProvider = ({children})=>{
    const [theme,setTheme] = useState(true);
    return (
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
