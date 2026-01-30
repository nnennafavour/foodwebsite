import React, { useEffect } from 'react'
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'

const ThemeToggleBtn = ({theme, setTheme}) => {
    useEffect(() => {
        const preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(theme || (preferDarkMode ? 'dark' : 'light'));
    }, []);

    useEffect(() => {
        if(theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

  return (
    <>
    <button>
        {theme === 'dark' ? (
            <img onClick={() => setTheme('light')} src={sun} 
            className="size-8.5 p-1.5 border border-gray-500 rounded-full" alt="Sun" />
        ) : (
            <img onClick={() => setTheme('dark')} src={moon} 
            className="size-8.5 p-1.5 border border-gray-500 rounded-full"alt="Moon" />
        )}
    </button>
    </>
  )
}

export default ThemeToggleBtn