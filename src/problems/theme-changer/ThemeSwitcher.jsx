import { useContext } from "react";
import { ThemeContext } from "./GlobalContext";



export const ThemeSwitcher = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <div style={{ border: "solid gray 4px", padding: "30px", display: "flex", flexDirection: "column" }}>
            <h2>Current theme is {theme}</h2>
            <button onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}>
                Toggle Theme
            </button>
        </div>

    )
}
