// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'

// const testimonials = [
//   {
//     name: 'Priya Sharma',
//     role: 'Engineering Student',
//     content: 'KAkshya-KUL helped me make an informed decision about my college choice. The ROI calculator was eye-opening!',
//     avatar: '/test1.jpg',
//   },
//   {
//     name: 'Rahul Patel',
//     role: 'Parent',
//     content: 'As a parent, I found the insights provided by KAkshya-KUL invaluable in planning my child\'s education.',
//     avatar: '/test2.jpeg',
//   },
// ]

// export default function Testimonials() {
//   return (
//     <section id="testimonials" className="py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">What Our Users Say</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
//             >
//               <div className="flex items-center mb-4">
//                 <Image
//                   src={testimonial.avatar}
//                   alt={testimonial.name}
//                   width={80}
//                   height={80}
//                   className="rounded-full mr-4"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{testimonial.name}</h3>
//                   <p className="text-gray-600 dark:text-gray-300">{testimonial.role}</p>
//                 </div>
//               </div>
//               <p className="text-gray-600 dark:text-gray-300 italic">&quot;{testimonial.content}&quot;</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1662522208023-8c517d0ba3c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxhdmF0YXIlMjBpbmRpYW4lMjB0ZWVuYWdlciUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://media.istockphoto.com/id/912902378/photo/face-of-indian-teenage-boy-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=Wq_5fik9q9v86llP2fipRP_2K74-Ww5bxisONs4OMe8=",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/test4.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/test3.avif",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      
      src: "https://images.unsplash.com/photo-1572853366277-ecbf6650ad8e?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
