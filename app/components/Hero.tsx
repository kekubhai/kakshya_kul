'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 text-center lg:text-left z-10"
          >
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8">
              Is your degree <br className="hidden lg:block" />
              <span className="text-slate-900">worth the debt?</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Calculate the real return on investment of your education. 
              Data-driven insights to help you make smarter career decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 h-14 text-lg shadow-lg hover:shadow-xl transition-all">
                <Link href="/roi-calculator">Calculate ROI</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-900 text-slate-900 hover:bg-slate-50 rounded-full px-8 h-14 text-lg">
                <Link href="/college-comparison">Compare Colleges</Link>
              </Button>
            </div>
          </motion.div>

          {/* Visual Content - 3D Chart Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative flex justify-center"
          >
            <div className="relative w-full aspect-square max-w-md [perspective:1000px]">
              {/* Abstract Chart Card */}
              <div className="absolute inset-0 bg-white rounded-3xl border border-slate-200 shadow-2xl [transform:rotateY(-12deg)_rotateX(6deg)] transition-transform hover:[transform:rotateY(0deg)_rotateX(0deg)] duration-700 ease-out flex items-end justify-around p-8 pb-0 overflow-hidden">
                {/* Bars */}
                <motion.div 
                  initial={{ height: 0 }} animate={{ height: '40%' }} transition={{ delay: 0.4, duration: 1 }}
                  className="w-8 sm:w-12 bg-slate-200 rounded-t-lg"
                ></motion.div>
                <motion.div 
                  initial={{ height: 0 }} animate={{ height: '60%' }} transition={{ delay: 0.5, duration: 1 }}
                  className="w-8 sm:w-12 bg-slate-300 rounded-t-lg"
                ></motion.div>
                <motion.div 
                  initial={{ height: 0 }} animate={{ height: '80%' }} transition={{ delay: 0.6, duration: 1 }}
                  className="w-8 sm:w-12 bg-slate-800 rounded-t-lg"
                ></motion.div>
                <motion.div 
                  initial={{ height: 0 }} animate={{ height: '50%' }} transition={{ delay: 0.7, duration: 1 }}
                  className="w-8 sm:w-12 bg-slate-400 rounded-t-lg"
                ></motion.div>
                
                {/* Floating Elements */}
                <div className="absolute top-8 left-8 right-8">
                    <div className="h-2 w-1/3 bg-slate-100 rounded mb-2"></div>
                    <div className="h-2 w-1/2 bg-slate-50 rounded"></div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-slate-100 to-slate-50 rounded-full blur-3xl opacity-60"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
