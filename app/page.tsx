/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { motion } from 'framer-motion'

import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import { AnimatedTestimonialsDemo } from './components/Testimonial'
import { Navbar } from './components/Header'
import Contact from './components/Contacts'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      <Navbar/>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <AnimatedTestimonialsDemo/>
      <Contact/>
      <Footer />
    </div>
  )
}

