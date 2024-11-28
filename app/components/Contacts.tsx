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
    <section className="py-24 bg-muted bg-gray-50 dark:bg-gray-900 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Have questions? We're here to help!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-12 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <Input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

