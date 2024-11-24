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
    <Card>
      <CardHeader>
        <CardTitle>ROI Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="rounded-lg border p-3">
            <div className="text-sm font-medium">ROI Percentage</div>
            <div className="text-2xl font-bold">{results.roi.toFixed(2)}%</div>
          </div>
          <div className="rounded-lg border p-3">
            <div className="text-sm font-medium">Payback Period</div>
            <div className="text-2xl font-bold">{results.paybackPeriod.toFixed(1)} years</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

