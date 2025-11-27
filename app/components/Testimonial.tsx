'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    quote: "The platform has revolutionized our academic projects. It's a game-changer for Indian college students like us.",
    name: "Sarah Jane",
    designation: "B.Tech Student at IIT Bombay",
    src: "https://images.unsplash.com/photo-1662522208023-8c517d0ba3c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxhdmF0YXIlMjBpbmRpYW4lMjB0ZWVuYWdlciUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
  },
  {
    quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Aryan Raj Singh",
    designation: "MBA Student at IIM Ahmedabad",
    src: "https://media.istockphoto.com/id/912902378/photo/face-of-indian-teenage-boy-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=Wq_5fik9q9v86llP2fipRP_2K74-Ww5bxisONs4OMe8=",
  },
  {
    quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Kaustav Das",
    designation: "B.A. Student at Delhi University",
    src: "/test4.jpg",
  },
  {
    quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "Karan Jain",
    designation: "B.Com Student at Mumbai University",
    src: "/test7.jpeg",
  },
  {
    quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Jatin Yadav",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1572853366277-ecbf6650ad8e?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="w-[400px] flex-shrink-0 bg-white p-8 rounded-xl border border-slate-200 mx-4 shadow-sm hover:shadow-md transition-shadow">
    <p className="text-xl font-serif text-slate-900 mb-6 leading-relaxed">"{testimonial.quote}"</p>
    <div className="flex items-center gap-4">
      <div className="relative w-12 h-12 rounded-full overflow-hidden grayscale">
        <Image 
          src={testimonial.src} 
          alt={testimonial.name} 
          fill 
          className="object-cover"
          unoptimized // Adding unoptimized to avoid potential image optimization issues with external URLs if not configured
        />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
        <p className="text-slate-500 text-xs uppercase tracking-wider">{testimonial.designation}</p>
      </div>
    </div>
  </div>
)

export function AnimatedTestimonialsDemo() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="mb-16 text-center px-4">
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Trusted by students nationwide</h2>
      </div>
      
      <div className="flex overflow-hidden">
        <motion.div 
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 40 
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
