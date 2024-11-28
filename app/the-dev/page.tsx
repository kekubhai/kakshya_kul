'use client'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import Link from 'next/link'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from './shooting-bg'

export default function TheDev() {
  return (
    <div className=" min-h-screen h-full w-full  bg-black">
       <ShootingStars />
       <StarsBackground />
      <h1 className="text-4xl font-bold  py-3 text-center mb-8 text-slate-100 mt-">The Developer</h1>
      <Card className="max-w-2xl mx-auto  bg-slate- rounded-lg shadow-md">
        <CardHeader className=" m-12 text-white py-4 px-4 rounded-t-lg">
          <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
            <Image
              src="/pfp3.jpg"
              alt="Developer"
              width={128}
              height={128}
              className="object-cover rounded-full"
            />
          </div>
          <CardTitle className="text-xl font-semibold text-center">Anirban Ghosh</CardTitle>
          <CardDescription className="text-sm text-center">Full-Stack Drv,Blockchain Enthusiast</CardDescription>
        
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-center text-gray-700">
          Hi, I am Anirban Ghosh, a 2nd-year B.Tech student specializing in
            Computer Science (AIML). Passionate about web development, I enjoy
            solving coding challenges, exploring data structures and
            algorithms, and diving into cutting-edge technologies  </p>
        </CardContent>
        <div className="flex justify-center  mb-4 mt-4">
            <Link href="https://github.com/kekubhai" target="_blank" rel="noopener noreferrer" className="text-lg bg-neutral-300 text-gray-700 hover:text-gray-900 mr-4">
              <GitHubLogoIcon className='w-10 h-10'/>
            </Link>
            <Link href="https://www.linkedin.com/in/anirban-ghosh010/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-gray-900 mr-4">
            <LinkedInLogoIcon className='h-10 w-10'/>
            </Link>
            <Link href="https://onirban.in.net/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-gray-900">
            <Avatar>
      <AvatarImage src="/images.jpeg" alt="@shadcn" />
      <AvatarFallback>AG</AvatarFallback>
    </Avatar>
            </Link>
          </div>
        
      </Card>
    </div>
  )
}

