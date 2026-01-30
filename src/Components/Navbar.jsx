

import React from 'react'
import Logo_dark from '../assets/logo_dark.png'
import Logo_light from '../assets/logo_light.png'
import { BiCloset, BiMenu, BiRightArrowAlt } from 'react-icons/bi'
import Menudark from '../assets/menu_dark.png'
import Menuwhite from '../assets/menu_white.png'
import { useState } from 'react'
import { GiClosedBarbute } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import ThemeToggleBtn from './ThemeToggleBtn.jsx'
import { motion } from "motion/react"

const Navbar = ({ theme, setTheme }) => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <motion.nav 
    initial={{opacity:0, y:-50}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.6, ease:'easeOut'}}
    className="flex items-center justify-between px-4 sm:px-12 lg:px-24 xl:px-40
      py-4 sticky top-0 z-20 backdrop-blur-xl font-medium
      bg-white/50 dark:bg-gray-900/70">

      {/* LEFT: LOGO + TEXT */}
      <div className="flex items-start gap-2">
        <img
          src={theme === 'dark' ? Logo_light : Logo_dark}
          className="h-8 w-8 sm:h-10 sm:w-10"
          alt="Logo"
        />

        <div className="leading-tight text-left">
          <h1 className="text-sm sm:text-base font-bold text-red-800">
            The Old Ways
          </h1>
          <p className="text-[10px] sm:text-xs text-amber-500">
            ...the heart of home
          </p>
        </div>
      </div>

      {/* CENTER: NAV LINKS */}
      <div className={`text-gray-700 dark:text-white sm:text-lg ${!sidebarOpen ?'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'}
    max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col
   max-sm:bg-red-800 max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
        
        <MdClose className="w-5 absolute right-4 top-4 sm:hidden" onClick={()=> setSidebarOpen(false)}/>

        <a onClick={()=>setSidebarOpen(false)} href="#" className="hover:border-b border-current">Home</a>
        <a onClick={()=>setSidebarOpen(false)} href="#services" className="hover:border-b border-current">Services</a>
        <a onClick={()=>setSidebarOpen(false)} href="#our-work" className="hover:border-b border-current">Our Work</a>
        <a onClick={()=>setSidebarOpen(false)} href="#contact-us" className="hover:border-b border-current">Contact Us</a>
      </div>

      {/* RIGHT: BUTTON */}
      <div className="flex items-center gap-2 sm:gap-4">

      <ThemeToggleBtn theme={theme} setTheme={setTheme} />

      <img src={theme === 'dark' ? Menuwhite : Menudark} alt="Menu" onClick={()=> setSidebarOpen(true)}
      className="w-8 sm:hidden" />

      <a
        href="#contact-us"
        className="hidden sm:flex items-center gap-2 bg-red-800
        text-white px-6 py-2 rounded-full cursor-pointer
        hover:scale-105 transition-all"
      >
        Connect <BiRightArrowAlt className="text-2xl font-bold"/>
      </a>
      </div>

    </motion.nav>
  )
}

export default Navbar
