"use client";

import Link from "next/link";
import { useState } from "react";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Check, ChevronsUpDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";

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
  const { theme, setTheme } = useTheme();
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  return (
    <nav className="bg-teal-500 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Kakshya-KUL
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground hover:text-primary"
              >
                {item.name}
              </Link>
            ))}

  
            <Popover open={featuresOpen} onOpenChange={setFeaturesOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={featuresOpen}
                  className="w-[200px] justify-between"
                >
                  {selectedFeature
                    ? featuresDropdown.find((item) => item.value === selectedFeature)?.label
                    : "Features"}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search feature..." className="h-9" />
                  <CommandList>
                    <CommandEmpty>No feature found.</CommandEmpty>
                    <CommandGroup>
                      {featuresDropdown.map((feature) => (
                        <CommandItem
                          key={feature.value}
                          onSelect={(currentValue) => {
                            setSelectedFeature(currentValue === selectedFeature ? null : currentValue);
                            setFeaturesOpen(false);
                          }}
                          value={feature.value}
                        >
                          <Link href={feature.href} className="w-full">
                            {feature.label}
                          </Link>
                          <Check
                            className={cn(
                              "ml-auto",
                              selectedFeature === feature.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className="ml-4"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
