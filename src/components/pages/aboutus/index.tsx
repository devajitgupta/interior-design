"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Leaf, Award, Users, Home } from "lucide-react"

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Designer",
      image: "/team/sarah.jpg",
      bio: "With 12 years in luxury interior design, Sarah brings elegance to every space."
    },
    {
      name: "Michael Chen",
      role: "Architectural Specialist",
      image: "/team/michael.jpg",
      bio: "Michael blends structural integrity with aesthetic vision for stunning results."
    },
    {
      name: "Priya Patel",
      role: "Client Relations",
      image: "/team/priya.jpg",
      bio: "Priya ensures every client's vision is understood and perfectly executed."
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/about/hero-bg.jpg"
            alt="Luxury interior design"
            fill
            className="object-cover brightness-75"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-4"
          >
            Our Design Philosophy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Where creativity meets functionality to transform spaces into stories
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/about/studio.jpg"
              alt="Our design studio"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-6">
              Crafting Spaces Since 2010
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              Founded in a small studio with big dreams, Elegance Interiors has grown into a 
              premier design firm serving clients nationwide. What began as a passion project 
              between two design school graduates has flourished into a team of 15 creative 
              professionals.
            </p>
            <p className="text-lg text-neutral-600 mb-8">
              We believe interiors should tell your story while elevating daily life. Our 
              approach combines timeless principles with contemporary innovation to create 
              spaces that are as functional as they are beautiful.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-bold text-amber-600 text-xl">200+</h3>
                <p className="text-neutral-600">Projects Completed</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-bold text-amber-600 text-xl">15</h3>
                <p className="text-neutral-600">Awards Won</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-4">
              Our Design Principles
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The foundation of every project we undertake
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf size={40} className="text-amber-600" />,
                title: "Sustainability",
                description: "We source eco-friendly materials and implement energy-efficient solutions without compromising on style."
              },
              {
                icon: <Home size={40} className="text-amber-600" />,
                title: "Functionality",
                description: "Beautiful spaces must work beautifully. We design for real life with smart storage and intuitive layouts."
              },
              {
                icon: <Users size={40} className="text-amber-600" />,
                title: "Client-Centric",
                description: "Your vision guides our process. We listen first, then craft solutions tailored to your lifestyle."
              },
              {
                icon: <Award size={40} className="text-amber-600" />,
                title: "Craftsmanship",
                description: "From concept to installation, we uphold the highest standards in every detail."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-800 mb-4">
            Meet Our Creative Team
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            The talented individuals who bring your vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative h-80 rounded-xl overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-800">{member.name}</h3>
              <p className="text-amber-600 mb-2">{member.role}</p>
              <p className="text-neutral-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-serif font-bold mb-6"
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Schedule a free consultation with our design team to discuss your project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200">
              Book a Consultation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}