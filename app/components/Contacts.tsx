'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from '@/hooks/use-toast'
import { ArrowRight } from 'lucide-react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email })
    toast({
      title: "Subscribed!",
      description: "We'll keep you updated.",
    })
    setEmail('')
  }

  return (
    <section className="py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
          Stay ahead of the curve.
        </h2>
        <p className="text-xl text-slate-600 mb-12">
          Get the latest insights on education ROI delivered to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto relative">
          <div className="relative flex items-center border-b-2 border-slate-900 pb-2 focus-within:border-blue-600 transition-colors">
            <Input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full border-0 p-0 text-slate-900 placeholder:text-slate-400 focus:ring-0 text-2xl sm:text-3xl bg-transparent h-auto shadow-none"
            />
            <Button type="submit" variant="ghost" size="icon" className="absolute right-0 hover:bg-transparent text-slate-900 hover:text-blue-600 transition-colors">
              <ArrowRight className="w-8 h-8" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
