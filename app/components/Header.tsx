"use client"

import { useState, useEffect } from "react"
import { Moon, School, School2, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

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
    <header className="flex bg-transparent  w-full  mx-3 py-4  border-b transition-colors duration-200">
      <div className="flex  items-center space-x-8">
        <Link href="/" className="flex items-center space-x-2">
        <School2/>
          <span className="text-xl px-3 font-bold">Kakshya-KUL</span>
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
 <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link">Features</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup   >
          <DropdownMenuRadioItem value="top">
            <Link href="/roi-calculator">ROI calculator</Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">
            <Link href="/career-insights">Career Insights</Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">
            <Link href="/college-comparisons">College Comparisons</Link>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
          
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

