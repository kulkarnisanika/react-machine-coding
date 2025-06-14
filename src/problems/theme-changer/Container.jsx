import { useContext } from 'react'
import { ThemeContext } from './GlobalContext'
import { ThemeSwitcher } from './ThemeSwitcher'
import Counter from './Counter';

export const Container = () => {

    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme === 'dark' ? "black" : "white", width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "red" }}>
            <ThemeSwitcher />
            <Counter />
        </div>
    )
}
