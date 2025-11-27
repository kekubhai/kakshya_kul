import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


import { ThemeProvider } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kakshya-KUL',
  description: 'Calculate your college ROI and explore career insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

