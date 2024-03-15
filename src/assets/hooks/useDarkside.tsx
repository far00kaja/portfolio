
// Filename - hooks/useDarkSide.js

import { useState } from "react";

export default function useDarkSide() {
    const [theme, setTheme]: any = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? "light" : "dark";
    // if (theme===undefined){
    //     setTheme('light')
    // }

    // localStorage.setItem("theme", theme);
    // useEffect(() => {
    //     const root = window.document.documentElement;
    //     console.log('test : ', colorTheme);
    //     root.classList.remove(colorTheme);
    //     root.classList.add(theme);
    //     console.log(root.classList.contains('dark'))
    //     console.log(root.classList)
    //     if (localStorage.theme == "dark")
    //     localStorage.removeItem("theme");
    //     else localStorage.setItem("theme", theme);
    // }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}