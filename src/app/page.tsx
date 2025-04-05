import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/contactus";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <CallToAction />
      <ContactForm/>
      <Footer />
    </main>
  )
}

