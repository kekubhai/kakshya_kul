'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FloatingNav } from '@/components/ui/floating-navbar';
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="bg-white dark:bg-gray-800 shadow-md"
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold text-blue-600 dark:text-blue-400"
        >
          Kakshya-KUL
        </motion.h1>

        {/* Floating Navigation Bar */}
        <FloatingNav
          navItems={[
            {
              name: 'Home',
              link: '/',
              icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
            },
            {
              name: 'About',
              link: '/about',
              icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
            },
            {
              name: 'Contact',
              link: '/contact',
              icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
            },
          ]}
        />

        {/* Dark Mode Toggle Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 ml-auto"
        >
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </motion.button>
      </div>
    </motion.header>
  );
}
