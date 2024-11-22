"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  const [theme, setTheme] = useState("light")

 
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark")
    localStorage.setItem("theme", newTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
    }
  }, [])

  return (
    <header className="flex  fixed  w-full px-6 py-4 bg-background border-b transition-colors duration-200">
      <div className="flex items-center space-x-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Kakshya-KUL</span>
        </Link>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <Link
          href="/"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Home
        </Link>
        <a
          href="/features"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Features
        </a>
        <a
          href="/contacts"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Contacts
        </a>
        <a
          href="/the-dev"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          The Dev
        </a>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle theme"
          className="ml-4"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </nav>

      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        aria-label="Open menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Button>
    </header>
  )
}

