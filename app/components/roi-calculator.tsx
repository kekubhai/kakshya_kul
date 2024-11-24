/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import {
  Form,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type RoiCalculatorProps<TFormSchema extends z.ZodType<any>> = {
  schema: TFormSchema
  defaultValues: z.infer<TFormSchema>
  steps: React.ReactNode[]
  onSubmit: (values: z.infer<TFormSchema>) => Promise<void>
  title?: string
}

export  default function RoiCalculator<TFormSchema extends z.ZodType<any>>({
  schema,
  defaultValues,
  steps,
  onSubmit,
  title = "ROI Calculator",
}: RoiCalculatorProps<TFormSchema>) {
  const [step, setStep] = React.useState(1)
  const [isCalculating, setIsCalculating] = React.useState(false)
  const { theme, setTheme } = useTheme()

  const form = useForm<z.infer<TFormSchema>>({
    resolver: zodResolver(schema),
    defaultValues,
  })

 
  const handleSubmit = async (values: z.infer<TFormSchema>) => {
    setIsCalculating(true)
    await onSubmit(values)
    setIsCalculating(false)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{title}</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>

        <Progress value={(steps?.length > 0 ? step * (100 / steps.length) : 0)} className="mb-6" />

        <Tabs value={String(step)} onValueChange={(value) => setStep(Number(value))}>
          <TabsList className="grid w-full grid-cols-3 mb-6">
            {steps?.map((_, index) => (
              <TabsTrigger key={index} value={String(index + 1)}>
                Step {index + 1}
              </TabsTrigger>
            ))}
          </TabsList>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              {steps?.map((content, index) => (
                <TabsContent key={index} value={String(index + 1)}>
                  {content}
                  <div className="flex justify-between mt-6">
                    {index > 0 && (
                      <Button type="button" variant="outline" onClick={() => setStep(index)}>
                        Previous
                      </Button>
                    )}
                    {index < steps.length - 1 ? (
                      <Button type="button" onClick={() => setStep(index + 2)}>
                        Next
                      </Button>
                    ) : (
                      <Button type="submit" disabled={isCalculating}>
                        {isCalculating ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Calculating
                          </>
                        ) : (
                          "Calculate"
                        )}
                      </Button>
                    )}
                  </div>
                </TabsContent>
              ))}
            </form>
          </Form>
        </Tabs>
      </CardContent>
    </Card>
  )
}