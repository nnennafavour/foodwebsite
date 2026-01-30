
import React from 'react'
import Title from './Title.jsx'
import { FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BiRightArrowAlt } from 'react-icons/bi'
import toast from 'react-hot-toast'
import { motion } from "motion/react"

const ContactUs = () => {

  const onSubmit = async (e) => {
    e.preventDefault()

    toast.success('Thank you for your submission!')

    e.target.reset()
  }

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{ staggerChildren: 0.2 }}
    viewport={{ once: true }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="We would love to hear from you!"
      />

      <motion.form
      initial={{opacity:0, y:30}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:0.4}}
      viewport={{once:true}}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >

        <div>
          <p className="mb-2 text-sm font-medium">Your name</p>
          <div className="flex items-center pl-3 rounded-lg border border-gray-500 dark:border-gray-600">
            <FaUser className="text-gray-400 mr-2" />
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none
                         text-gray-800 dark:text-white
                         placeholder:text-gray-400"
              required
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Email id</p>
          <div className="flex items-center pl-3 rounded-lg border border-gray-500 dark:border-gray-600">
            <MdEmail className="text-gray-400 mr-2" />
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none
                         text-gray-800 dark:text-white
                         placeholder:text-gray-400"
              required
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            className="w-full p-3 text-sm outline-none rounded-lg border
                       border-gray-500 dark:border-gray-600
                       text-gray-800 dark:text-white
                       placeholder:text-gray-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-max flex gap-2 bg-red-800 text-white text-lg px-10 py-3 rounded-full
                     hover:scale-105 transition-all"
        >
          Submit <BiRightArrowAlt className="text-2xl" />
        </button>

      </motion.form>
    </motion.div>
  )
}

export default ContactUs
