import React from 'react'
import Logo_dark from '../assets/Logo_dark.png'
import Logo_light from '../assets/Logo_light.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { motion } from "framer-motion"

const Footer = ({ theme }) => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="
        w-full
        bg-slate-50 dark:bg-gray-900
        mt-20 sm:mt-40
        overflow-x-hidden
      "
    >
      {/* INNER WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-10 box-border">
        {/* Footer Top */}
        <div className="flex flex-col sm:flex-row gap-8 text-sm">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-5 text-gray-700 dark:text-gray-400 max-w-md"
          >
            <img
              src={theme === 'dark' ? Logo_dark : Logo_light}
              className="h-8 w-12 sm:h-10 sm:w-10"
              alt="Logo"
            />

            <p>
              Crafted with love. Served with passion. Thank you for choosing us — we can’t wait to serve you again.
            </p>

            <ul className="flex flex-wrap gap-4">
              <li><a className="hover:text-red-800" href="#hero">Home</a></li>
              <li><a className="hover:text-red-800" href="#services">Services</a></li>
              <li><a className="hover:text-red-800" href="#our-work">Our Work</a></li>
              <li><a className="hover:text-red-800" href="#contact-us">Contact Us</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 w-full sm:max-w-sm"
          >
            <h3 className="font-medium">Subscribe to our newsletter</h3>
            <p className="text-sm mt-2 mb-4">
              The latest news, articles, and resources sent to your inbox weekly
            </p>

            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  p-3
                  text-sm
                  outline-none
                  rounded
                  dark:text-gray-200
                  bg-transparent
                  border border-gray-300 dark:border-gray-500
                "
              />
              <button className="bg-red-800 text-white rounded px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        <hr className="border-gray-300 dark:border-gray-600 my-6" />

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pb-6"
        >
          <div className="text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-center sm:text-left">
              Copyright 2025 © GreatStack. All Rights Reserved.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-red-800"><FaFacebookF /></a>
              <a href="#" className="hover:text-red-800"><FaTwitter /></a>
              <a href="#" className="hover:text-red-800"><FaInstagram /></a>
              <a href="#" className="hover:text-red-800"><FaLinkedinIn /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
