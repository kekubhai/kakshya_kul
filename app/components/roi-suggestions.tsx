import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

interface RoiSuggestionsProps {
  suggestions: string[]
}

export function RoiSuggestions({ suggestions }: RoiSuggestionsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <span>{suggestion}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

