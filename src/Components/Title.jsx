import React from 'react'
import { motion } from "motion/react"

const Title = ({ title, desc }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}

        className="text-3xl sm:text-5xl font-medium"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-lg text-center text-gray-500 dark:text-white/75"
      >
        {desc}
      </motion.p>
    </div>
  )
}
export default Title
