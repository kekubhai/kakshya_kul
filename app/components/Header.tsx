"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Calculator", href: "/roi-calculator" },
  { name: "Compare", href: "/college-comparison" },
  { name: "Insights", href: "/career-insights" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl shadow-sm border-b border-zinc-100 dark:border-zinc-800" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight hidden sm:block">
                Kakshya<span className="text-emerald-500">KUL</span>
              </span>
            </Link>

            {/* Center Links - Desktop */}
            <div className="hidden lg:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-full p-1.5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-5 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-700 rounded-full transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Buttons - Auth */}
            <div className="flex items-center gap-3">
              {/* Dark Mode Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-amber-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-zinc-600" />
                  )}
                </button>
              )}

              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="ghost" className="hidden sm:flex text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full px-5">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-full px-6 py-2.5 h-auto text-sm font-medium transition-all shadow-lg shadow-zinc-900/20 hover:shadow-zinc-900/30 hover:scale-105">
                    Get Started Free
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Button
                  asChild
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-full px-6 py-2.5 h-auto text-sm font-medium transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105"
                >
                  <Link href="/roi-calculator">Calculate ROI</Link>
                </Button>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10 ring-2 ring-zinc-100",
                    }
                  }}
                />
              </SignedIn>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-zinc-900 dark:text-white" /> : <Menu className="w-5 h-5 text-zinc-900 dark:text-white" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-40 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-b border-zinc-100 dark:border-zinc-800 lg:hidden"
          >
            <div className="p-6 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-lg font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 rounded-xl transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
