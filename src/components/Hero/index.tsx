"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import Navigation from "../Navigation"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={ref} className="relative min-h-screen">
      <Navigation />

      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div style={{ y, opacity }} className="h-full w-full">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Interior Design"
            fill
            priority
            className="object-cover brightness-[0.85]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-32 md:pt-40 pb-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 mb-6"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-white/90 text-sm">Rated 5.0 by over 200 clients</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6"
          >
            Transform Your Space Into a <span className="text-amber-400">Masterpiece</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl"
          >
            We create bespoke interior designs that reflect your personality and lifestyle. From concept to completion,
            we handle every detail with precision and care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/portfolio"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 text-center flex items-center justify-center gap-2 group"
            >
              View Our Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/consultation"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-3 rounded-md font-medium transition-colors duration-200 text-center"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>

        {/* Floating Features */}
        <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Personalized Design",
              description: "Tailored to your unique style and needs",
              delay: 0.8,
            },
            {
              title: "Expert Craftsmanship",
              description: "Attention to detail in every aspect",
              delay: 1.0,
            },
            {
              title: "Complete Service",
              description: "From concept to final installation",
              delay: 1.2,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-colors duration-200"
            >
              <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-white" />
        </motion.div>
      </motion.div>
    </div>
  )
}

