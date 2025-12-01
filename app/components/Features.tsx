'use client'

import { motion } from 'framer-motion'
import { Calculator, TrendingUp, Scale, Zap, Shield, BarChart3 } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: <Calculator className="w-6 h-6" />,
    title: 'ROI Calculator',
    description: 'Calculate potential returns based on college fees, expected salary, and career trajectory. Get personalized insights for Indian colleges.',
    href: '/roi-calculator',
    gradient: 'from-emerald-400 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
    borderColor: 'border-emerald-100',
    span: 'lg:col-span-2',
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: 'College Comparison',
    description: 'Compare IITs, NITs, IIMs, and private colleges side-by-side with detailed ROI metrics.',
    href: '/college-comparison',
    gradient: 'from-cyan-400 to-blue-500',
    bgGradient: 'from-cyan-50 to-blue-50',
    borderColor: 'border-cyan-100',
    span: 'lg:col-span-1',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Career Insights',
    description: 'Explore salary trends, job market demand, and career growth paths across different industries in India.',
    href: '/career-insights',
    gradient: 'from-violet-400 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50',
    borderColor: 'border-violet-100',
    span: 'lg:col-span-1',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Placement Analytics',
    description: 'Real placement data from top colleges including median packages, top recruiters, and placement rates.',
    href: '/career-insights',
    gradient: 'from-orange-400 to-rose-500',
    bgGradient: 'from-orange-50 to-rose-50',
    borderColor: 'border-orange-100',
    span: 'lg:col-span-2',
  },
]

const miniFeatures = [
  { icon: <Zap className="w-5 h-5" />, title: 'Real-time Data', description: 'Updated placement stats' },
  { icon: <Shield className="w-5 h-5" />, title: 'Verified Info', description: 'From official sources' },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-4 py-2 mb-6 shadow-sm"
          >
            <span className="text-sm font-medium text-zinc-600">Powerful Features</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 tracking-tight"
          >
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              make the right choice
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-600"
          >
            Comprehensive tools and insights to help you evaluate and compare educational investments.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={feature.span}
            >
              <Link href={feature.href} className="block h-full group">
                <div className={`h-full bg-gradient-to-br ${feature.bgGradient} p-8 rounded-3xl border ${feature.borderColor} transition-all duration-300 hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-1`}>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-zinc-900 group-hover:text-zinc-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mini Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {miniFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-zinc-200 shadow-sm">
              <div className="text-emerald-500">{feature.icon}</div>
              <div>
                <span className="font-medium text-zinc-900">{feature.title}</span>
                <span className="text-zinc-400 mx-2">•</span>
                <span className="text-zinc-500">{feature.description}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
