import React, { useEffect, useState } from 'react'

const ThemeSwitcher = () => {

    const [theme, setTheme] = useState(null);

    useEffect(()=>{
        if (window.matchMedia("prefer-color-scheme: dark").matches){
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])

    return (
        <button>

        </button>
    )
}

export default ThemeSwitcher