'use client'

import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonial'
import Footer from './components/Footer'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </motion.div>
  )
}
