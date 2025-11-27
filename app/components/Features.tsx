'use client'

import { motion } from 'framer-motion'
import { Calculator, TrendingUp, Scale } from 'lucide-react'

const features = [
  {
    icon: <Calculator className="w-8 h-8 text-slate-900" strokeWidth={1.5} />,
    title: 'ROI Calculator',
    description: 'Calculate the return on investment for your college education based on various factors. Input tuition, expected salary, and loan details to get a clear picture.',
    className: "md:col-span-2"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-slate-900" strokeWidth={1.5} />,
    title: 'Career Insights',
    description: 'Get valuable insights into potential career paths and salary trends across different industries.',
    className: "md:col-span-1"
  },
  {
    icon: <Scale className="w-8 h-8 text-slate-900" strokeWidth={1.5} />,
    title: 'College Comparisons',
    description: 'Compare different colleges and their ROI to make an informed decision. Visualize the long-term value of degrees from different institutions side-by-side.',
    className: "md:col-span-3"
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Everything you need to decide.
          </h2>
          <p className="text-lg text-slate-600">
            Powerful tools designed to help you make the best investment for your future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.01)" }}
              className={`bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 ${feature.className || ''}`}
            >
              <div className="mb-6 p-3 bg-slate-50 rounded-xl w-fit border border-slate-100">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
