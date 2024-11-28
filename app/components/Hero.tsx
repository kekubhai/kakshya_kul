'use client'

import ImageSlider from '@/components/Slider'
import PulsatingButton from '@/components/ui/pulsating-button'
import SparklesText from '@/components/ui/sparkles-text'
import WordPullUp from '@/components/ui/word-pull-up'

import { motion } from 'framer-motion'
import Link from 'next/link'


export default function Hero() {
  return (
    <section className="py-12  px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
        <h1 className="text-4xl  font-extrabold sm:text-5xl md:text-6xl py-3">
        Welcome to  <SparklesText text={'Kakshya-KUL'}></SparklesText>
          </h1>
         <WordPullUp className='left-2 px-2 ' words={'Apna College Apne Hisab Se'}>
          
         </WordPullUp>
      

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

