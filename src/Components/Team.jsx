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
      className="
        w-screen
        overflow-x-hidden
        text-gray-800 dark:text-white
        pt-24 sm:pt-32
      "
    >
      {/* INNER SAFE WRAPPER */}
      <div className="max-w-[100vw] px-2 sm:px-6 lg:px-12 xl:px-20 mx-auto">
        <div className="flex flex-col items-center gap-8">
          <Title
            title="Meet the team"
            desc="A dedicated team of food enthusiasts and tech experts committed to delivering the best food delivery experience."
          />

          {/* TEAM GRID */}
          <div
            className="
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
              gap-4
              w-full
              max-w-[calc(100vw-1rem)]
              mx-auto
            "
          >
            {teamData.map((team, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  flex flex-col items-center text-center
                  p-4
                  w-full
                  rounded-lg
                  border border-gray-300 dark:border-gray-700
                  bg-white dark:bg-gray-900
                  shadow-md
                  transition-all duration-300
                  sm:hover:scale-105
                "
              >
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-14 h-14 rounded-full object-cover mb-2"
                />

                <h3 className="font-semibold text-base">
                  {team.name}
                </h3>
                <p className="text-sm opacity-70">
                  {team.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Team
