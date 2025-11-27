"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { School2Icon, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "The Dev", href: "/the-dev" },
];

const featuresDropdown = [
  { value: "roi-calculator", label: "ROI Calculator", href: "/roi-calculator" },
  { value: "college-comparison", label: "College Comparisons", href: "/college-comparison" },
  { value: "career-insights", label: "Career Insights", href: "/career-insights" },
];

export function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-slate-900 tracking-tight">
              <School2Icon className="h-6 w-6" />
              Kakshya-KUL
            </Link>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors outline-none">
                Features <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white border-slate-200 shadow-lg rounded-lg p-1">
                {featuresDropdown.map((feature) => (
                  <DropdownMenuItem key={feature.value} asChild>
                    <Link
                      href={feature.href}
                      className="w-full cursor-pointer text-slate-600 focus:text-slate-900 focus:bg-slate-50 rounded-md px-2 py-2 text-sm"
                    >
                      {feature.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right Buttons - Auth */}
          <div className="flex items-center gap-3">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 py-2 h-auto text-sm font-medium transition-all shadow-sm hover:shadow-md">
                  Get Started
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Button
                asChild
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 py-2 h-auto text-sm font-medium transition-all shadow-sm hover:shadow-md"
              >
                <Link href="/roi-calculator">Calculate ROI</Link>
              </Button>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10 border-2 border-slate-200",
                  }
                }}
              />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
}
