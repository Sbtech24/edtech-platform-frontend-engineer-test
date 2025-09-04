"use client"
import { createContext,useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" 

interface ThemeProviderProps {
  children: React.ReactNode;
  
}

interface ThemeProviderState  {
  theme: Theme;
  toggleTheme: ()=> void
  
}

const initialState: ThemeProviderState = {
  theme: "light",
  toggleTheme: ()=> null
}

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({children} : ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light")


  const toggleTheme = ()=>{
    setTheme((prev)=> prev =="light" ? "dark": "light")
  }
  useEffect(() => {
    // Apply the theme to the <html> tag
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeProviderContext.Provider value={{theme,toggleTheme}}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}