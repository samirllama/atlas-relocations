export const metadata = {
  title: "Home - Stellar",
  description: "Page description",
}

import HeroStatic from "@/components/hero-static"
import Hero from "@/components/hero"
import LogoWall from "@/components/logo-wall"
import Features from "@/components/features"
import Features02 from "@/components/features-02"
import Features03 from "@/components/features-03"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import Features04 from "@/components/features-04"
import Pricing from "./price-section"
import Testimonials from "@/components/testimonials"
import Cta from "@/components/cta"

export default function Home() {
  return (
    <>
      <HeroStatic />
      <Cta />
    </>
  )
}
