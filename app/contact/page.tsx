/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from '@/hooks/use-toast'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
   
    console.log({ name, email, message })
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section className="min-h-screen py-32 bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600">
            Have questions? We&apos;d love to hear from you.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">Name</label>
              <Input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border-slate-200 focus:border-slate-900 focus:ring-slate-900"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">Email</label>
              <Input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-slate-200 focus:border-slate-900 focus:ring-slate-900"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">Message</label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full border-slate-200 focus:border-slate-900 focus:ring-slate-900"
            />
          </div>
          <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full py-6 text-lg font-medium transition-all">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}

