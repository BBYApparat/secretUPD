import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollAnimations } from '@/components/ScrollAnimations'
import { HeroSection } from '@/components/home/HeroSection'
import { AboutSection } from '@/components/home/AboutSection'
import { FeaturesSection } from '@/components/home/FeaturesSection'
import { TeamSection } from '@/components/home/TeamSection'
import { RulesSection } from '@/components/home/RulesSection'
import { JoinSection } from '@/components/home/JoinSection'

export default function Home() {
  return (
    <>
      <Navigation />
      <ScrollAnimations />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <TeamSection />
        <RulesSection />
        <JoinSection />
      </main>
      <Footer />
    </>
  )
}
