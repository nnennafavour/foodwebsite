
import React from 'react'
import Title from './Title'
import phone from '../assets/phone.png'
import delivery from '../assets/delivery.png'
import quality from '../assets/quality.png'
import { motion } from "motion/react"

const OurWork = () => {

  const workData = [
    {
      title: 'Mobile Food Ordering',
      description: 'Order your favorite meals easily through our fast and user-friendly mobile platform.',
      image: phone,
    },
    {
      title: 'Fast & Reliable Delivery',
      description: 'Hot, fresh meals delivered to your doorstep quickly with real-time order tracking.',
      image: delivery,
    },
    {
      title: 'Quality & Taste Guaranteed',
      description: 'We prepare every meal with premium ingredients and chef-approved recipes.',
      image: quality,
    },
  ]

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{ staggerChildren: 0.2 }}
    viewport={{ once: true }}
      id="our-work"
      className="flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40
      pt-24 text-gray-700 dark:text-white"
    >
      <Title
        title="Our Latest Work"
        desc="We take pride in delivering delicious meals and exceptional service every day. From fast delivery to quality preparation and customer satisfaction, our recent work reflects our commitment to making every food experience enjoyable and stress-free."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {workData.map((work, index) => (
          <motion.div
          initial={{opacity:0, y:30}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.5, delay:index * 0.2}}
      viewport={{once:true}}
            key={index}
            className="flex flex-col items-center text-center  bg-gray-100 dark:bg-white/10
        border border-gray-600 hover:border-orange-500 hover:bg-white dark:hover:bg-white/20
        hover:shadow-lg rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1
            transition-all duration-300 h-[340px]"
          >
            {/* Image wrapper */}
            <div className="h-32 flex items-center justify-center mb-4">
              <img
                src={work.image}
                alt={work.title}
                className="h-full object-contain"
              />
            </div>

            <h3 className="text-lg font-semibold mb-2">
              {work.title}
            </h3>

            <p className="text-sm opacity-70">
              {work.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default OurWork
