
"use client"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The platform has revolutionized our academic projects. It's a game-changer for Indian college students like us.",
      name: "Sarah Jane",
      designation: "B.Tech Student at IIT Bombay",
      src: "https://images.unsplash.com/photo-1662522208023-8c517d0ba3c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxhdmF0YXIlMjBpbmRpYW4lMjB0ZWVuYWdlciUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Aryan Raj Singh",
      designation: "MBA Student at IIM Ahmedabad",
      src: "https://media.istockphoto.com/id/912902378/photo/face-of-indian-teenage-boy-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=Wq_5fik9q9v86llP2fipRP_2K74-Ww5bxisONs4OMe8=",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Kaustav Das",
      designation: "B.A. Student at Delhi University",
      src: "/test4.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Karan Jain",
      designation: "B.Com Student at Mumbai University",
      src: "/test7.jpeg",
    },
  
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Sonali Dey",
      designation: "CTO at InnovateSphere",
      src: "/test6.jpeg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Roshan Sodi",
      designation: "Operations Director at CloudScale",
      src: "/test5.jpeg",
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
      name: "Jatin Yadav",
      designation: "VP of Technology at FutureNet",
      
      src: "https://images.unsplash.com/photo-1572853366277-ecbf6650ad8e?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
