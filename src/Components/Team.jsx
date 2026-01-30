import React from 'react'
import Title from './Title.jsx'
import { teamData } from '../assets/assets.js'
import { motion } from "motion/react"

const Team = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center gap-8 px-4 sm:px-12 lg:px-24 xl:px-40 
      pt-32 text-gray-800 dark:text-white"
    >
      <Title
        title="Meet the team"
        desc="A dedicated team of food enthusiasts and tech experts committed to delivering the best food delivery experience."
      />

      {/* TEAM GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-250">
        {teamData.map((team, index) => (
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            key={index}
            className="
              flex flex-col items-center text-center
              p-4
              rounded-lg
              border border-gray-300 dark:border-gray-700
              bg-white dark:bg-gray-900
              shadow-md
              transition-all duration-300
              hover:scale-105
              hover:shadow-lg
            "
          >
            {/* IMAGE */}
            <img
              src={team.image}
              alt={team.name}
              className="w-16 h-16 rounded-full object-contain mb-1"
            />

            {/* TEXT */}
            <h3 className="font-semibold text-base">
              {team.name}
            </h3>
            <p className="text-sm opacity-70 mt-1">
              {team.role}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Team
