"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

interface RoiComparisonProps {
  results: {
    totalCost: number
    potentialEarnings: number
    roi: number
  }
}

export function RoiComparison({ results }: RoiComparisonProps) {
  const comparisonData = [
    {
      type: "Your College",
      cost: results.totalCost,
      earnings: results.potentialEarnings,
      roi: results.roi,
      highlight: true,
    },
    {
      type: "IIT Average",
      cost: 1000000,
      earnings: 25000000,
      roi: 2400,
      highlight: false,
    },
    {
      type: "Private Engineering",
      cost: 1200000,
      earnings: 8000000,
      roi: 567,
      highlight: false,
    },
    {
      type: "State University",
      cost: 400000,
      earnings: 5000000,
      roi: 1150,
      highlight: false,
    },
  ]

  const getRoiStatus = (roi: number, yourRoi: number) => {
    if (roi > yourRoi + 50) return { icon: TrendingUp, color: "text-emerald-500" }
    if (roi < yourRoi - 50) return { icon: TrendingDown, color: "text-orange-500" }
    return { icon: Minus, color: "text-zinc-400" }
  }

  return (
    <div className="bg-gradient-to-br from-zinc-50 to-white rounded-2xl border border-zinc-200 p-6">
      <h3 className="text-lg font-bold text-zinc-900 mb-6">Compare with Other Options</h3>
      
      <div className="space-y-3">
        {comparisonData.map((item, index) => {
          const status = getRoiStatus(item.roi, results.roi)
          const StatusIcon = status.icon
          
          return (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-xl border ${
                item.highlight 
                  ? 'bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200' 
                  : 'bg-white border-zinc-100 hover:border-zinc-200'
              } transition-all`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {item.highlight && (
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400" />
                  )}
                  <div>
                    <p className={`font-semibold ${item.highlight ? 'text-emerald-700' : 'text-zinc-900'}`}>
                      {item.type}
                    </p>
                    <p className="text-sm text-zinc-500">
                      Cost: ₹{(item.cost / 100000).toFixed(1)}L
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm text-zinc-500">10-Year Earnings</p>
                    <p className="font-semibold text-zinc-900">
                      ₹{(item.earnings / 100000).toFixed(0)}L
                    </p>
                  </div>
                  
                  <div className={`flex items-center gap-1 px-3 py-1.5 rounded-lg ${
                    item.highlight 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-zinc-100 text-zinc-700'
                  }`}>
                    {!item.highlight && <StatusIcon className={`w-4 h-4 ${status.color}`} />}
                    <span className="font-bold">{item.roi.toFixed(0)}%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
      
      <p className="mt-4 text-xs text-zinc-400 text-center">
        * Comparison based on average placement data from 2023
      </p>
    </div>
  )
}

