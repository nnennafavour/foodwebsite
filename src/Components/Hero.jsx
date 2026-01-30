import React from 'react'
import group from '../assets/group.png'
import hero_img from '../assets/hero_img.jpg'
import { motion } from "motion/react"


const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center
    w-full overflow-hidden text-gray-700 dark:text-white'>

    <motion.div 
    initial={{opacity:0, y:20}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6, delayed:0.7}}
    viewport={{once:true}}
    className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
        <img className="w-20" src={group} alt="" />
        <p className="text-xs font-medium">Trusted by 100k people and more</p>
    </motion.div>

    <motion.h1 
    initial={{opacity:0, y:40}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6, delayed:0.8}}
    viewport={{once:true}}

    className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl">
        Giving you a delicious <span className="text-red-800">homemade</span> food.</motion.h1>

    <div className='leading-tight flex flex-col items-center'>
    <h1 className="text-lg mb-0.5 sm:text-lg font-medium text-amber-600 dark:text-amber-500 max-w-4/5 sm:max-w-lg pb-3">Too tired to cook?</h1>
    <motion.p 
    initial={{opacity:0, y: 30}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.5, delayed:1}}
    viewport={{once:true}}

    className="text-sm sm:text-lg mt-0 font-medium text-gray-500 gap-0.5 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3">
    No worries, we can cook for you and your family in small or large 
    quantities for a token.Like soups stew in litres and more
    </motion.p>
    </div>

    <motion.div 
    initial={{opacity:0, scale:0.9}}
    whileInView={{opacity:1, scale:1}}
    transition={{duration:0.6, delayed:2}}
    viewport={{once:true}}

    className="relative">
        <img src={hero_img} alt="" className="w-120 h-100 max-w-6xl rounded-3xl"/>
        
    </motion.div>
    </div>
  )
}

export default Hero