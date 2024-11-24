"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2, HelpCircle, Sun, Moon } from 'lucide-react'
import { useTheme } from "next-themes"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RoiChart } from "./roi-chart"
import { RoiComparison } from "./roi-comparison"
import { RoiSuggestions } from "./roi-suggestions"

const formSchema = z.object({
  collegeFees: z.number().positive("College fees must be positive"),
  familyIncome: z.number().positive("Family income must be positive"),
  avgSalary: z.number().positive("Average salary must be positive"),
  collegeTier: z.string(),
  costOfLiving: z.number().min(0).max(100),
})

const collegeTiers = [
  { value: "tier1", label: "Tier 1 - Top Universities" },
  { value: "tier2", label: "Tier 2 - State Universities" },
  { value: "tier3", label: "Tier 3 - Community Colleges" },
]

export function RoiCalculator() {
  const [step, setStep] = React.useState(1)
  const [isCalculating, setIsCalculating] = React.useState(false)
  const [results, setResults] = React.useState<never>(null)
  const { theme, setTheme } = useTheme()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      collegeFees: 0,
      familyIncome: 0,
      avgSalary: 0,
      collegeTier: "tier1",
      costOfLiving: 50,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsCalculating(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    const roi = calculateRoi(values)
    setResults(roi)
    setIsCalculating(false)
  }

  function calculateRoi(values: z.infer<typeof formSchema>) {
    const totalCost = values.collegeFees * 4 // 4 years of college
    const potentialEarnings = values.avgSalary * 10 // 10 years after graduation
    const roi = ((potentialEarnings - totalCost) / totalCost) * 100
    
    return {
      roi,
      totalCost,
      potentialEarnings,
      paybackPeriod: totalCost / values.avgSalary,
      suggestions: generateSuggestions(values),
    }
  }

  function generateSuggestions(values: z.infer<typeof formSchema>) {
    const suggestions = []
    
    if (values.collegeFees > values.familyIncome * 0.3) {
      suggestions.push("Consider applying for scholarships and financial aid")
    }
    
    if (values.costOfLiving > 70) {
      suggestions.push("Look for more affordable housing options or consider nearby areas")
    }
    
    return suggestions
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">ROI Calculator for College Degree</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        <Progress value={step * 33.33} className="mb-6" />

        <Tabs value={String(step)} onValueChange={(value) => setStep(Number(value))}>
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="1">Basic Info</TabsTrigger>
            <TabsTrigger value="2">College Details</TabsTrigger>
            <TabsTrigger value="3">Results</TabsTrigger>
          </TabsList>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <TabsContent value="1">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="collegeFees"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>College Fees</FormLabel>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <FormControl>
                                <div className="relative">
                                  <Input
                                    type="number"
                                    placeholder="Enter college fees in USD"
                                    {...field}
                                    onChange={e => field.onChange(Number(e.target.value))}
                                  />
                                  <HelpCircle className="h-4 w-4 absolute right-3 top-3 text-muted-foreground" />
                                </div>
                              </FormControl>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Total cost of tuition for the entire program</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="familyIncome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Family Income</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter annual family income"
                            {...field}
                            onChange={e => field.onChange(Number(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="button" onClick={() => setStep(2)}>Next</Button>
                </div>
              </TabsContent>

              <TabsContent value="2">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="avgSalary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expected Average Salary</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="Enter expected salary after graduation"
                            {...field}
                            onChange={e => field.onChange(Number(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="collegeTier"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>College Tier</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select college tier" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {collegeTiers.map((tier) => (
                              <SelectItem key={tier.value} value={tier.value}>
                                {tier.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="costOfLiving"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cost of Living Index</FormLabel>
                        <FormControl>
                          <Slider
                            min={0}
                            max={100}
                            step={1}
                            value={[field.value]}
                            onValueChange={(value) => field.onChange(value[0])}
                          />
                        </FormControl>
                        <FormDescription>
                          Slide to adjust cost of living (0 = Very Low, 100 = Very High)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setStep(1)}>
                      Previous
                    </Button>
                    <Button type="submit" disabled={isCalculating}>
                      {isCalculating ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Calculating
                        </>
                      ) : (
                        "Calculate ROI"
                      )}
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="3">
                {results && (
                  <div className="space-y-6">
                    <RoiChart results={results} />
                    <RoiComparison results={results} />
                    <RoiSuggestions suggestions={results.suggestions} />
                    
                    <Button type="button" variant="outline" onClick={() => setStep(1)}>
                      Start Over
                    </Button>
                  </div>
                )}
              </TabsContent>
            </form>
          </Form>
        </Tabs>
      </CardContent>
    </Card>
  )
}

