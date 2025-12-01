'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "KakshyaKUL helped me understand the real value of my IIT education. The ROI calculator gave me clarity on my career investment.",
    name: "Priya Sharma",
    designation: "B.Tech, IIT Bombay",
    rating: 5,
    src: "https://images.unsplash.com/photo-1662522208023-8c517d0ba3c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    quote: "Compared 5 different MBA colleges using this platform. The insights helped me choose IIM Ahmedabad with confidence.",
    name: "Aryan Singh",
    designation: "MBA, IIM Ahmedabad",
    rating: 5,
    src: "https://media.istockphoto.com/id/912902378/photo/face-of-indian-teenage-boy-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20",
  },
  {
    quote: "The salary projections were incredibly accurate. After 2 years, I'm earning exactly what the calculator predicted!",
    name: "Sneha Patel",
    designation: "B.Com, SRCC Delhi",
    rating: 5,
    src: "/test4.jpg",
  },
  {
    quote: "As a parent, this tool helped me plan my son's education budget better. Highly recommend to all Indian families.",
    name: "Rajesh Kumar",
    designation: "Parent",
    rating: 5,
    src: "/test7.jpeg",
  },
  {
    quote: "The college comparison feature is a game-changer. Saved months of research and helped me make an informed decision.",
    name: "Ankit Verma",
    designation: "B.Tech, NIT Trichy",
    rating: 5,
    src: "https://images.unsplash.com/photo-1572853366277-ecbf6650ad8e?q=80&w=1827&auto=format&fit=crop",
  },
]

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="w-[380px] flex-shrink-0 bg-white p-8 rounded-3xl border border-zinc-100 mx-3 shadow-sm hover:shadow-xl hover:shadow-zinc-100 transition-all duration-300 group"
  >
    {/* Rating */}
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
    
    <p className="text-lg text-zinc-700 mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
    
    <div className="flex items-center gap-4">
      <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-zinc-100 group-hover:ring-emerald-200 transition-all">
        <Image 
          src={testimonial.src} 
          alt={testimonial.name} 
          fill 
          className="object-cover"
          unoptimized
        />
      </div>
      <div>
        <h4 className="font-bold text-zinc-900">{testimonial.name}</h4>
        <p className="text-sm text-zinc-500">{testimonial.designation}</p>
      </div>
    </div>
  </motion.div>
)

export function AnimatedTestimonialsDemo() {
  return (
    <section className="py-24 bg-[#FAFAFA] overflow-hidden">
      {/* Section Header */}
      <div className="container mx-auto px-6 lg:px-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-4 py-2 mb-6 shadow-sm"
          >
            <span className="text-sm font-medium text-zinc-600">Student Stories</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 tracking-tight"
          >
            Trusted by <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">50,000+</span> Students
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-600"
          >
            See how students across India are making smarter education decisions.
          </motion.p>
        </div>
      </div>
      
      {/* Scrolling Testimonials */}
      <div className="flex overflow-hidden">
        <motion.div 
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 30 
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} index={idx % testimonials.length} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
