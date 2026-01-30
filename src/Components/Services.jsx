import React from 'react'
import { MdShoppingBasket, MdSupportAgent } from 'react-icons/md'
import { GiFoodTruck } from 'react-icons/gi'
import { AiFillStar } from 'react-icons/ai'
import Title from './Title.jsx'
import { motion } from 'framer-motion'

const Services = () => {

  const servicesData = [
    {
      title: "Online Ordering / Purchase",
      description: "Order your favorite meals in just a few clicks.",
      icon: <MdShoppingBasket size={28} />
    },
    {
      title: "Fast Delivery",
      description: "Hot and fresh meals delivered to your doorstep.",
      icon: <GiFoodTruck size={28} />
    },
    {
      title: "Quality Assurance",
      description: "Fresh ingredients and strict hygiene standards.",
      icon: <AiFillStar size={28} />
    },
    {
      title: "Customer Support",
      description: "Friendly support whenever you need help.",
      icon: <MdSupportAgent size={28} />
    }
  ]

  return (
    <section
      id="services"
      className="flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 
      pt-32 text-gray-700 dark:text-white"
    >
      <Title
        title="How can we help?"
        desc="We help you get great food, faster."
      />

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="
              flex flex-col items-center text-center
              p-4 sm:p-5
              rounded-lg
              border border-gray-300 dark:border-gray-700
              bg-white dark:bg-gray-900
              shadow-sm
              transition-all duration-300
              hover:border-orange-500
              hover:shadow-md
              cursor-pointer
            "
          >
            {/* ICON */}
            <div className="text-orange-500 mb-3 text-2xl">
              {service.icon}
            </div>

            {/* TITLE */}
            <h4 className="font-semibold text-lg mb-2">
              {service.title}
            </h4>

            {/* DESCRIPTION */}
            <p className="text-base text-gray-600 dark:text-white/70 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services
