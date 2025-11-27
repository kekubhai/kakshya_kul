import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

interface RoiSuggestionsProps {
  suggestions: string[]
}

export function RoiSuggestions({ suggestions }: RoiSuggestionsProps) {
  return (
    <Card className="border-slate-200 bg-slate-50">
      <CardHeader>
        <CardTitle className="text-slate-900">Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {suggestions.slice(0, 5).map((suggestion, index) => (
            <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100">
              <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span className="text-slate-600">{suggestion}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

