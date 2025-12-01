"use client"

import { motion } from "framer-motion"
import { Lightbulb, TrendingUp, BookOpen, Briefcase, Award } from "lucide-react"

interface RoiSuggestionsProps {
  suggestions: string[]
}

const iconMap = [Lightbulb, TrendingUp, BookOpen, Briefcase, Award]
const gradientMap = [
  "from-amber-400 to-orange-500",
  "from-emerald-400 to-teal-500",
  "from-blue-400 to-indigo-500",
  "from-purple-400 to-pink-500",
  "from-cyan-400 to-blue-500",
]

export function RoiSuggestions({ suggestions }: RoiSuggestionsProps) {
  return (
    <div className="bg-gradient-to-br from-zinc-50 to-white rounded-2xl border border-zinc-200 p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-zinc-900">Smart Recommendations</h3>
          <p className="text-sm text-zinc-500">Personalized tips to maximize your ROI</p>
        </div>
      </div>
      
      <div className="space-y-3">
        {suggestions.slice(0, 5).map((suggestion, index) => {
          const Icon = iconMap[index % iconMap.length]
          const gradient = gradientMap[index % gradientMap.length]
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-white border border-zinc-100 hover:border-zinc-200 hover:shadow-md transition-all group"
            >
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-zinc-700 leading-relaxed">{suggestion}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
      
      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100">
        <p className="text-sm text-emerald-700 text-center">
          💡 <span className="font-medium">Pro Tip:</span> Consider internships and part-time work to offset costs and gain experience
        </p>
      </div>
    </div>
  )
}

