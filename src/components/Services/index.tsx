"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Paintbrush, Sofa, Lightbulb, Home, ShoppingBag, Ruler } from "lucide-react"

const services = [
  {
    icon: <Paintbrush size={24} />,
    title: "Interior Design",
    description: "Full-service interior design tailored to your style, needs, and budget.",
  },
  {
    icon: <Sofa size={24} />,
    title: "Furniture Selection",
    description: "Curated furniture recommendations that balance aesthetics and functionality.",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Lighting Design",
    description: "Strategic lighting plans that enhance ambiance and functionality.",
  },
  {
    icon: <Home size={24} />,
    title: "Space Planning",
    description: "Optimized layouts that maximize your space's potential and flow.",
  },
  {
    icon: <ShoppingBag size={24} />,
    title: "Accessory Styling",
    description: "Finishing touches that add personality and complete your space.",
  },
  {
    icon: <Ruler size={24} />,
    title: "Custom Solutions",
    description: "Bespoke furniture and built-ins designed specifically for your space.",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">Our Design Services</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            We offer a comprehensive range of interior design services to transform your space into a beautiful and
            functional environment.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-neutral-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-amber-100 text-amber-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-neutral-900 mb-2">{service.title}</h3>
              <p className="text-neutral-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

