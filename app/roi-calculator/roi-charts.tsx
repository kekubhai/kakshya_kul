import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
      name: "Total Cost",
      value: results.totalCost,
    },
    {
      name: "Potential Earnings",
      value: results.potentialEarnings,
    },
  ]

  return (
    <Card className="border-slate-200 bg-slate-50">
      <CardHeader>
        <CardTitle className="text-slate-900">ROI Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" tick={{ fill: '#64748b' }} axisLine={{ stroke: '#e2e8f0' }} />
              <YAxis tick={{ fill: '#64748b' }} axisLine={{ stroke: '#e2e8f0' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }} 
              />
              <Bar dataKey="value" fill="#0f172a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="text-sm font-medium text-slate-500">ROI Percentage</div>
            <div className="text-3xl font-bold text-slate-900">{results.roi.toFixed(2)}%</div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="text-sm font-medium text-slate-500">Payback Period</div>
            <div className="text-3xl font-bold text-slate-900">{results.paybackPeriod.toFixed(1)} years</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

