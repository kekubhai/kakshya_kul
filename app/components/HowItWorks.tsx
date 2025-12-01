'use client'

import { motion } from 'framer-motion'
import { ClipboardList, Calculator, BarChart3, Lightbulb } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: <ClipboardList className="w-6 h-6" />,
    title: 'Enter Your Details',
    description: 'Input college fees, family income, expected salary, and other relevant information.',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    number: '02',
    icon: <Calculator className="w-6 h-6" />,
    title: 'Calculate ROI',
    description: 'Our algorithm analyzes multiple factors to compute your education return on investment.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    number: '03',
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Compare Options',
    description: 'See how different colleges stack up against each other with detailed comparisons.',
    color: 'from-violet-400 to-purple-500',
  },
  {
    number: '04',
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Get Insights',
    description: 'Receive personalized recommendations and actionable insights for your education journey.',
    color: 'from-orange-400 to-rose-500',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-4 py-2 mb-6"
          >
            <span className="text-sm font-medium text-zinc-600">Simple Process</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 tracking-tight"
          >
            How It Works
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-600"
          >
            Four simple steps to understand the true value of your education investment.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-zinc-200 to-transparent z-0" />
                )}
                
                <div className="relative z-10 text-center">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-24 h-24 mb-6 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl opacity-10`} />
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                      {step.icon}
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-900 shadow-sm">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
