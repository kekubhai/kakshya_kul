'use client'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import Link from 'next/link'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'

export default function TheDev() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-900 tracking-tight mb-4">The Developer</h1>
          <p className="text-xl text-slate-600">The mind behind Kakshya-KUL</p>
        </div>
        
        <Card className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <CardHeader className="pt-12 pb-6">
            <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-4 border-slate-100 shadow-lg">
              <Image
                src="/pfp3.jpg"
                alt="Developer"
                width={128}
                height={128}
                className="object-cover rounded-full"
              />
            </div>
            <CardTitle className="text-2xl font-bold text-center text-slate-900">Anirban Ghosh</CardTitle>
            <CardDescription className="text-center text-slate-500 mt-1">Full-Stack Developer, Blockchain Enthusiast</CardDescription>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <p className="text-center text-slate-600 leading-relaxed mb-8">
              Hi, I am Anirban Ghosh, a 2nd-year B.Tech student specializing in
              Computer Science (AIML). Passionate about web development, I enjoy
              solving coding challenges, exploring data structures and
              algorithms, and diving into cutting-edge technologies.
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                href="https://github.com/kekubhai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors"
              >
                <GitHubLogoIcon className='w-6 h-6'/>
              </Link>
              <Link 
                href="https://www.linkedin.com/in/anirban-ghosh010/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors"
              >
                <LinkedInLogoIcon className='h-6 w-6'/>
              </Link>
              <Link 
                href="https://onirban.in.net/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="rounded-full overflow-hidden border-2 border-slate-100 hover:border-slate-300 transition-colors"
              >
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/images.jpeg" alt="@shadcn" />
                  <AvatarFallback className="bg-slate-100 text-slate-600">AG</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

