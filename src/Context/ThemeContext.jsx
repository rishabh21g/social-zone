import React, { createContext, useContext, useEffect } from 'react'
const ThemeContext = createContext(null);


const ThemeContextProvider = (props) => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const element = document.documentElement
    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("light");
            element.classList.remove("dark");
        }
    }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => useContext(ThemeContext);


export default ThemeContextProvider
