import { createContext, useState } from "react";


const ThemeContext = createContext();
const CounterContext = createContext();

const GlobalContext = ({children}) => {

    const [theme, setTheme] = useState('light');
    const [counter, setCounter] = useState(0);

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            <CounterContext.Provider value={{counter, setCounter}}>
                {children}
            </CounterContext.Provider>
        </ThemeContext.Provider>
            
        
    )
}

export default GlobalContext;
export {ThemeContext, CounterContext};