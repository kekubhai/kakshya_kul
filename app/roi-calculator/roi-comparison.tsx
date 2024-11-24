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
  // Sample comparison data - in a real app, this would come from a database
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
    <Card>
      <CardHeader>
        <CardTitle>Program Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Program Type</TableHead>
              <TableHead className="text-right">Total Cost</TableHead>
              <TableHead className="text-right">Potential Earnings</TableHead>
              <TableHead className="text-right">ROI %</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData.map((item) => (
              <TableRow key={item.type}>
                <TableCell className="font-medium">{item.type}</TableCell>
                <TableCell className="text-right">${item.cost.toLocaleString()}</TableCell>
                <TableCell className="text-right">${item.earnings.toLocaleString()}</TableCell>
                <TableCell className="text-right">{item.roi.toFixed(1)}%</TableCell>
              </TableRow>
            ))}
</TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

