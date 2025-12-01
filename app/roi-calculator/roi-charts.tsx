import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

interface RoiChartProps {
  results: {
    totalCost: number
    potentialEarnings: number
    roi: number
    paybackPeriod: number
  }
}

export function RoiChart({ results }: RoiChartProps) {
  const data = [
    {
      name: "Investment",
      value: results.totalCost,
      fill: "url(#gradientCost)",
    },
    {
      name: "10-Year Earnings",
      value: results.potentialEarnings,
      fill: "url(#gradientEarnings)",
    },
  ]

  return (
    <div className="bg-gradient-to-br from-zinc-50 to-white rounded-2xl border border-zinc-200 p-6">
      <h3 className="text-lg font-bold text-zinc-900 mb-6">Investment vs Returns</h3>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={60}>
            <defs>
              <linearGradient id="gradientCost" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
              <linearGradient id="gradientEarnings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#71717a', fontSize: 12 }} 
              axisLine={{ stroke: '#e4e4e7' }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: '#71717a', fontSize: 12 }} 
              axisLine={{ stroke: '#e4e4e7' }}
              tickLine={false}
              tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#18181b', 
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgb(0 0 0 / 0.2)',
                color: 'white',
                padding: '12px 16px'
              }}
              formatter={(value: number) => [`₹${(value / 100000).toFixed(1)} Lakhs`, '']}
              labelStyle={{ color: '#a1a1aa', marginBottom: '4px' }}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

