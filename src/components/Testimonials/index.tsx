"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Working with Elegance Interiors was a dream. They transformed our outdated living room into a sophisticated space that perfectly reflects our style. Their attention to detail is unmatched.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The team designed our office space with both aesthetics and functionality in mind. Our employees love the new environment, and clients are always impressed when they visit.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Apartment Dweller",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "I was amazed at how they maximized my small apartment space. Every inch was thoughtfully considered, and the result is a home that feels both spacious and cozy.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-neutral-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Our Clients Say</h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients about their experience working with our
            design team.
          </p>
        </motion.div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -top-10 -left-10 text-amber-500 opacity-50"
          >
            <Quote size={80} />
          </motion.div>

          <div className="relative overflow-hidden py-10">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4 md:px-10">
                  <div className="text-center">
                    <p className="text-lg md:text-xl text-neutral-200 italic mb-8">{testimonial.quote}</p>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-medium text-lg">{testimonial.name}</h4>
                      <p className="text-neutral-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="bg-neutral-800 hover:bg-neutral-700 text-white p-2 rounded-full transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    current === index ? "bg-amber-500" : "bg-neutral-700"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="bg-neutral-800 hover:bg-neutral-700 text-white p-2 rounded-full transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

