/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2, HelpCircle, ArrowLeft, ArrowRight, Sparkles, IndianRupee, GraduationCap, Building2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
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
import { RoiChart } from "./roi-charts"
import { RoiComparison } from "./roi-comparison"
import { RoiSuggestions } from "./roi-suggestions"
import { Navbar } from "../components/Header"




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
    const totalCost = values.collegeFees * 4 
    const potentialEarnings = values.avgSalary * 10 
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
  
  const stepInfo = [
    { number: 1, title: 'Basic Info', icon: <IndianRupee className="w-5 h-5" /> },
    { number: 2, title: 'College Details', icon: <GraduationCap className="w-5 h-5" /> },
    { number: 3, title: 'Results', icon: <Sparkles className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      
      <div className="pt-28 pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-4 py-2 mb-6 shadow-sm">
              <Building2 className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-medium text-zinc-600">ROI Calculator</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
              Calculate Your
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"> Education ROI</span>
            </h1>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Enter your details to discover the potential return on investment for your college degree.
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-between">
              {stepInfo.map((s, index) => (
                <React.Fragment key={s.number}>
                  <div className="flex flex-col items-center">
                    <div 
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        step >= s.number 
                          ? 'bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-lg shadow-emerald-500/30' 
                          : 'bg-white border-2 border-zinc-200 text-zinc-400'
                      }`}
                    >
                      {s.icon}
                    </div>
                    <span className={`mt-2 text-sm font-medium ${step >= s.number ? 'text-zinc-900' : 'text-zinc-400'}`}>
                      {s.title}
                    </span>
                  </div>
                  {index < stepInfo.length - 1 && (
                    <div className={`flex-1 h-1 mx-4 rounded-full transition-all duration-300 ${
                      step > s.number ? 'bg-gradient-to-r from-emerald-400 to-teal-500' : 'bg-zinc-200'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <motion.div
            layout
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-3xl border border-zinc-200 shadow-xl shadow-zinc-200/50 overflow-hidden">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="p-8 space-y-6"
                      >
                        <FormField
                          control={form.control}
                          name="collegeFees"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-zinc-900 font-semibold flex items-center gap-2">
                                <IndianRupee className="w-4 h-4 text-emerald-500" />
                                Total College Fees (₹)
                              </FormLabel>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <FormControl>
                                      <div className="relative">
                                        <Input
                                          type="number"
                                          placeholder="e.g., 500000"
                                          className="h-14 text-lg border-zinc-200 focus:border-emerald-500 focus:ring-emerald-500/20 bg-zinc-50 rounded-xl"
                                          {...field}
                                          onChange={e => field.onChange(Number(e.target.value))}
                                        />
                                        <HelpCircle className="h-5 w-5 absolute right-4 top-4 text-zinc-400" />
                                      </div>
                                    </FormControl>
                                  </TooltipTrigger>
                                  <TooltipContent className="bg-zinc-900 text-white border-0 rounded-xl px-4 py-2">
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
                              <FormLabel className="text-zinc-900 font-semibold">Annual Family Income (₹)</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  placeholder="e.g., 1000000"
                                  className="h-14 text-lg border-zinc-200 focus:border-emerald-500 focus:ring-emerald-500/20 bg-zinc-50 rounded-xl"
                                  {...field}
                                  onChange={e => field.onChange(Number(e.target.value))}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="button" 
                          onClick={() => setStep(2)} 
                          className="w-full h-14 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl font-medium text-lg shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all"
                        >
                          Continue
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="p-8 space-y-6"
                      >
                        <FormField
                          control={form.control}
                          name="avgSalary"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-zinc-900 font-semibold">Expected Annual Salary (₹)</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  placeholder="e.g., 800000"
                                  className="h-14 text-lg border-zinc-200 focus:border-emerald-500 focus:ring-emerald-500/20 bg-zinc-50 rounded-xl"
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
                              <FormLabel className="text-zinc-900 font-semibold flex items-center gap-2">
                                <GraduationCap className="w-4 h-4 text-emerald-500" />
                                College Tier
                              </FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-14 text-lg border-zinc-200 focus:border-emerald-500 bg-zinc-50 rounded-xl">
                                    <SelectValue placeholder="Select college tier" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-white border-zinc-200 rounded-xl">
                                  {collegeTiers.map((tier) => (
                                    <SelectItem key={tier.value} value={tier.value} className="hover:bg-emerald-50 rounded-lg">
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
                              <FormLabel className="text-zinc-900 font-semibold">Cost of Living Index: {field.value}</FormLabel>
                              <FormControl>
                                <div className="pt-4 pb-2">
                                  <Slider
                                    min={0}
                                    max={100}
                                    step={1}
                                    value={[field.value]}
                                    onValueChange={(value) => field.onChange(value[0])}
                                    className="[&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:bg-gradient-to-r [&_[role=slider]]:from-emerald-500 [&_[role=slider]]:to-teal-500"
                                  />
                                </div>
                              </FormControl>
                              <FormDescription className="text-zinc-500">
                                0 = Metro cities like Mumbai/Delhi, 100 = Smaller towns
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="flex gap-4 pt-4">
                          <Button 
                            type="button" 
                            variant="outline" 
                            onClick={() => setStep(1)} 
                            className="flex-1 h-14 border-2 border-zinc-200 text-zinc-600 hover:bg-zinc-50 rounded-xl font-medium text-lg"
                          >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back
                          </Button>
                          <Button 
                            type="submit" 
                            disabled={isCalculating} 
                            className="flex-1 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl font-medium text-lg shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all disabled:opacity-50"
                          >
                            {isCalculating ? (
                              <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Calculating...
                              </>
                            ) : (
                              <>
                                Calculate ROI
                                <Sparkles className="w-5 h-5 ml-2" />
                              </>
                            )}
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && results && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-8 space-y-8"
                      >
                        {/* Results Header */}
                        <div className="text-center pb-6 border-b border-zinc-100">
                          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-4">
                            <Sparkles className="w-4 h-4 text-emerald-500" />
                            <span className="text-sm font-medium text-emerald-700">Analysis Complete</span>
                          </div>
                          <h2 className="text-2xl font-bold text-zinc-900 mb-2">Your ROI Results</h2>
                          <p className="text-zinc-600">Based on the information you provided</p>
                        </div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100">
                            <p className="text-sm text-zinc-600 mb-1">ROI Percentage</p>
                            <p className="text-3xl font-bold text-emerald-600">{results.roi.toFixed(1)}%</p>
                          </div>
                          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100">
                            <p className="text-sm text-zinc-600 mb-1">Total Investment</p>
                            <p className="text-3xl font-bold text-cyan-600">₹{(results.totalCost / 100000).toFixed(1)}L</p>
                          </div>
                          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-100">
                            <p className="text-sm text-zinc-600 mb-1">Payback Period</p>
                            <p className="text-3xl font-bold text-violet-600">{results.paybackPeriod.toFixed(1)} Yrs</p>
                          </div>
                        </div>

                        <RoiChart results={results} />
                        <RoiComparison results={results} />
                        <RoiSuggestions suggestions={results.suggestions} />
                        
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => {
                            setStep(1)
                            setResults(null)
                          }} 
                          className="w-full h-14 border-2 border-zinc-200 text-zinc-600 hover:bg-zinc-50 rounded-xl font-medium text-lg"
                        >
                          Start Over
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

