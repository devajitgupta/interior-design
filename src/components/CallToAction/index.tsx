"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4"
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-600 mb-8"
          >
            Book a free consultation with our design team and take the first step towards creating your dream interior.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/consultation"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 flex items-center justify-center gap-2 group"
            >
              Book a Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/contact"
              className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

