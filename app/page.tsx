import { Navbar } from '@/components/Navbar'
import { AuthorityBar } from '@/components/sections/AuthorityBar'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { ComboSection } from '@/components/sections/ComboSection'
import { OfferSection } from '@/components/sections/OfferSection'
import { ComoFunciona } from '@/components/sections/ComoFunciona'
import { HowYouGetAccess } from '@/components/sections/HowYouGetAccess'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { NewsletterSection } from '@/components/sections/NewsletterSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <ComboSection />
      <AuthorityBar />
      <ProblemSection />
      <div className="section-divider" />
      <OfferSection />
      <div className="section-divider" />
      <ComoFunciona />
      <div className="section-divider" />
      <HowYouGetAccess />
      <div className="section-divider" />
      <HowItWorks />
      <div className="section-divider" />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
      <NewsletterSection />
    </main>
  )
}
