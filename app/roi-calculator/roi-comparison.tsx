import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

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
      type: "Your Program",
      cost: results.totalCost,
      earnings: results.potentialEarnings,
      roi: results.roi,
    },
    {
      type: "Average 4-Year College",
      cost: 85000,
      earnings: 2500000,
      roi: 194,
    },
    {
      type: "Community College",
      cost: 35000,
      earnings: 1800000,
      roi: 414,
    },
  ]

  return (
    <Card className="border-slate-200 bg-slate-50">
      <CardHeader>
        <CardTitle className="text-slate-900">Program Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-slate-200 hover:bg-transparent">
              <TableHead className="text-slate-500 font-medium">Program Type</TableHead>
              <TableHead className="text-right text-slate-500 font-medium">Total Cost</TableHead>
              <TableHead className="text-right text-slate-500 font-medium">Potential Earnings</TableHead>
              <TableHead className="text-right text-slate-500 font-medium">ROI %</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData.map((item) => (
              <TableRow key={item.type} className="border-slate-200 hover:bg-white">
                <TableCell className="font-medium text-slate-900">{item.type}</TableCell>
                <TableCell className="text-right text-slate-600">${item.cost.toLocaleString()}</TableCell>
                <TableCell className="text-right text-slate-600">${item.earnings.toLocaleString()}</TableCell>
                <TableCell className="text-right font-semibold text-slate-900">{item.roi.toFixed(1)}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

