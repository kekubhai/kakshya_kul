'use client'

import ImageSlider from '@/components/Slider'
import PulsatingButton from '@/components/ui/pulsating-button'

import { motion } from 'framer-motion'
import Link from 'next/link'


export default function Hero() {
  return (
    <section className="py-20  px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Welcome to Kakshya-KUL
          </h1>
          <p className="text-xl mb-8  light: text-gray-200 dark:text-gray-700">
            Calculate your college education ROI and make informed decisions about your future.
          </p>
      

            <PulsatingButton>

              <Link  href= {"/roi-calculator"} >
                Calculate ROI
              </Link>
            </PulsatingButton>
              

         
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
         <ImageSlider/>
        </motion.div>
      </div>
    </section>
  )
}

