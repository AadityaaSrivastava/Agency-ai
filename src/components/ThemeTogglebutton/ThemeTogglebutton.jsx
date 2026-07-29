import React, {useEffect} from 'react'
import assets from '/src/assets/assets'

export const ThemeTogglebutton = ({theme, setTheme}) => {

  useEffect(() => {
    const prefersDarkMode= window.matchMedia("(prefers-color-scheme: dark)").matches
  },[])

  useEffect(()=>{
    if(theme==='dark'){
      document.documentElement.classList.add("dark")
    }else{
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem("theme",theme)
  }, [theme])
  return (
    <>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme==='dark'? (
                <img src={assets.sun_icon}
                className=" size-8.5 p-1.5 border border-gray-500 rounded-full"/>)
                : (
                <img src={assets.moon_icon}
                className=" size-8.5 p-1.5 border border-gray-500 rounded-full" />) }
        </button>
    </>
  )
}
