import { NavBar } from "@/components/nav-bar"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { ServiceCards } from "@/components/service-cards"
import { AISection } from "@/components/ai-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <NavBar />
      <main>
        <HeroSection />
        <FeatureSection />
        <ServiceCards />
        <AISection />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
