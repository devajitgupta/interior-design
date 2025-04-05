import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">
              Elegance<span className="text-amber-500">Interiors</span>
            </h3>
            <p className="text-neutral-400 mb-6">
              Creating beautiful, functional spaces that inspire and delight. Our passion is transforming your vision
              into reality.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-neutral-400 hover:text-amber-500 transition-colors duration-200">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-amber-500 transition-colors duration-200">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-amber-500 transition-colors duration-200">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-amber-500 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-400 hover:text-amber-500 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-neutral-400 hover:text-amber-500 transition-colors duration-200"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-amber-500 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-amber-500 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/interior-design"
                  className="text-neutral-400 hover:text-amber-500 transition-colors duration-200"
                >
                  Interior Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/space-planning"
                  className="text-neutral-400 hover:text-amber-500 transition-colors duration-200"
                >
                  Space Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/furniture-selection"
                  className="text-neutral-400 hover:text-amber-500 transition-colors duration-200"
                >
                  Furniture Selection
                </Link>
              </li>
              <li>
                <Link
                  href="/services/lighting-design"
                  className="text-neutral-400 hover:text-amber-500 transition-colors duration-200"
                >
                  Lighting Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-solutions"
                  className="text-neutral-400 hover:text-amber-500 transition-colors duration-200"
                >
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-neutral-400">123 Design Street, Creative District, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-amber-500 mr-2 flex-shrink-0" />
                <span className="text-neutral-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-amber-500 mr-2 flex-shrink-0" />
                <span className="text-neutral-400">info@eleganceinteriors.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Elegance Interiors. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-neutral-500 text-sm hover:text-amber-500 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-neutral-500 text-sm hover:text-amber-500 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

