"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Living Room",
    description: "Clean lines and neutral palette for a peaceful urban apartment",
    image: "/placeholder.svg?height=600&width=800",
    category: "Living Room",
  },
  {
    id: 2,
    title: "Luxurious Master Bedroom",
    description: "Elegant and comfortable retreat with custom furnishings",
    image: "/placeholder.svg?height=600&width=800",
    category: "Bedroom",
  },
  {
    id: 3,
    title: "Contemporary Kitchen Design",
    description: "Functional and stylish kitchen with premium finishes",
    image: "/placeholder.svg?height=600&width=800",
    category: "Kitchen",
  },
]

export default function FeaturedProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">Our Featured Projects</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Explore our portfolio of carefully crafted interiors that have transformed our clients' spaces into
            beautiful, functional homes.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="aspect-[4/3]">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="text-amber-400 text-sm font-medium">{project.category}</span>
                    <h3 className="text-white text-xl font-medium mt-1">{project.title}</h3>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-medium text-neutral-900 mb-2">{project.title}</h3>
              <p className="text-neutral-600 mb-4">{project.description}</p>
              <Link
                href={`/portfolio/${project.id}`}
                className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors duration-200"
              >
                View Project
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center bg-neutral-900 text-white px-6 py-3 rounded-md hover:bg-neutral-800 transition-colors duration-200"
          >
            View All Projects
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

