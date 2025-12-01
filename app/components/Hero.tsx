'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, TrendingUp, IndianRupee } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAFA] pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-40" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-4 py-2 mb-8 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium text-zinc-600">India&apos;s #1 College ROI Platform</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1] mb-6"
          >
            Is Your College
            <br />
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Worth The Investment?
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Calculate the real ROI of your education. Compare IITs, NITs, IIMs, and private colleges. 
            Make data-driven decisions for your future.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-full px-8 h-14 text-lg font-medium shadow-xl shadow-zinc-900/20 hover:shadow-zinc-900/30 hover:scale-105 transition-all group"
            >
              <Link href="/roi-calculator" className="flex items-center gap-2">
                Calculate ROI Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-zinc-200 text-zinc-700 hover:bg-white hover:border-zinc-300 rounded-full px-8 h-14 text-lg font-medium"
            >
              <Link href="/college-comparison">Compare Colleges</Link>
            </Button>
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative bg-white rounded-3xl border border-zinc-200 shadow-2xl shadow-zinc-200/50 p-8 overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full blur-3xl opacity-20" />
              
              {/* Mock Dashboard */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-zinc-600">Avg. ROI</span>
                  </div>
                  <p className="text-3xl font-bold text-zinc-900">340%</p>
                  <p className="text-sm text-emerald-600 mt-1">Top IIT Graduates</p>
                </motion.div>

                {/* Card 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                      <IndianRupee className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-zinc-600">Avg. Salary</span>
                  </div>
                  <p className="text-3xl font-bold text-zinc-900">₹18 LPA</p>
                  <p className="text-sm text-cyan-600 mt-1">Engineering Grads</p>
                </motion.div>

                {/* Card 3 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-zinc-600">Payback</span>
                  </div>
                  <p className="text-3xl font-bold text-zinc-900">2.5 Yrs</p>
                  <p className="text-sm text-violet-600 mt-1">Average Time</p>
                </motion.div>
              </div>

              {/* Mini Chart */}
              <div className="mt-8 flex items-end justify-center gap-2 h-24">
                {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 100].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 0.9 + i * 0.05, duration: 0.5 }}
                    className="w-6 bg-gradient-to-t from-emerald-500 to-teal-400 rounded-t-md"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
