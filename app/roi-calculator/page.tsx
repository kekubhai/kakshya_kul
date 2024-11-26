/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { RoiChart } from "./roi-charts"
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

export default function RoiCalculator() {
  const [step, setStep] = React.useState(1)
  const [isCalculating, setIsCalculating] = React.useState(false)
  const [results, setResults] = React.useState<any>(null)
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

  function generateSuggestions(values: {
    collegeFees: number;
    familyIncome: number;
    avgSalary: number;
    collegeTier: string;
    costOfLiving: number;
  }) {
    const suggestions = [];
  
    if (values.collegeFees > values.avgSalary * 2) {
      suggestions.push("Consider exploring alternative education paths or online courses.");
    }
    if (values.familyIncome < 200000 && values.collegeFees > 100000) {
      suggestions.push("Look into government scholarships or education subsidies.");
    }
    if (values.costOfLiving > 80) {
      suggestions.push("Research nearby cities or towns with lower living costs.");
    }
    if (values.avgSalary < 300000 && values.collegeFees > 250000) {
      suggestions.push("Evaluate the potential for salary growth in your chosen field.");
    }
    if (values.collegeTier === "Tier 2" || values.collegeTier === "Tier 3") {
      suggestions.push("Focus on developing in-demand skills to increase job prospects.");
    }
    if (values.collegeFees > values.familyIncome * 0.5) {
      suggestions.push("Consider part-time work or internships to offset the cost.");
    }
    if (values.costOfLiving > 90) {
      suggestions.push("Look for shared accommodation or consider a roommate.");
    }
    if (values.avgSalary < 200000 && values.collegeFees > 150000) {
      suggestions.push("Consider the potential for career advancement in your field.");
    }
    if (values.collegeTier === "Tier 1" || values.collegeTier === "Tier 2") {
      suggestions.push("Leverage the college's career services for job placement.");
    }

    if (values.collegeFees > values.familyIncome * 0.4) {
      suggestions.push("Don't let financial stress weigh you down! Explore scholarships, grants, and financial aid options.");
    }
    if (values.costOfLiving > 85) {
      suggestions.push("It's time to get creative with your budget! Consider shared accommodation, cooking at home, and canceling subscription services.");
    }
    if (values.avgSalary < 250000 && values.collegeFees > 200000) {
      suggestions.push("You got this! Focus on developing in-demand skills to boost your job prospects and salary potential.");
    }
    if (values.collegeTier === "Tier 1") {
      suggestions.push("You're part of an elite group! Leverage your college's strong reputation to land top internships and job opportunities.");
    } else if (values.collegeTier === "Tier 2") {
      suggestions.push("You're on the right track! Build a strong portfolio, network with professionals, and stay ahead of the curve in your field.");
    } else if (values.collegeTier === "Tier 3") {
      suggestions.push("Don't underestimate yourself! Focus on personal projects, certifications, and building a strong online presence to stand out.");
    }
    if (values.familyIncome < 400000 && values.collegeFees > 250000) {
      suggestions.push("It's time to have an open conversation with your family about financial planning and exploring long-term loan options.");
    }
    if (values.avgSalary < 400000 && values.collegeFees > 300000) {
      suggestions.push("Make sure you're on the right path! Ensure your chosen course aligns with your career goals and passions.");
    }
    if (values.collegeFees > values.familyIncome * 0.3) {
      suggestions.push("Consider applying for scholarships and financial aid.");
      suggestions.push("Explore education loans with low-interest rates.");
    }
    if (values.costOfLiving > 70) {
      suggestions.push("Look for more affordable housing options or consider nearby areas.");
      suggestions.push("Opt for a part-time job or internship to offset living expenses.");
    }
    const roi = (values.avgSalary / values.collegeFees) * 100;
    if (roi < 200) {
      suggestions.push("Evaluate colleges with lower fees and better placement statistics.");
    }
    if (roi >= 200 && roi < 400) {
      suggestions.push("This college offers moderate ROI, consider improving your skills for better placements.");
    } else if (roi >= 400) {
      suggestions.push("The ROI is excellent; prioritize your academics and internships to maximize benefits.");
    }
  
    
    if (values.collegeTier === "Tier 1") {
      suggestions.push("Leverage the strong alumni network and participate in research opportunities.");
    } else if (values.collegeTier === "Tier 2") {
      suggestions.push("Focus on building skills and participate in competitive events to stand out.");
    } else if (values.collegeTier === "Tier 3") {
      suggestions.push("Work on networking, personal projects, and certifications to enhance your career prospects.");
    }
    if (values.familyIncome < 500000 && values.collegeFees > 200000) {
      suggestions.push("Discuss financial planning with your family and consider long-term loan options.");
    }
    if (values.avgSalary < 500000 && values.collegeFees > 300000) {
      suggestions.push("Ensure the chosen course aligns with your career goals for better job opportunities.");
    }
  
    return suggestions;
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

