import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollAnimations } from '@/components/ScrollAnimations'

export const metadata = {
  title: 'About Us - Secret Roleplay UPD',
  description: 'Learn about the Unified Police Department history and mission',
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <ScrollAnimations />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.7)),url('https://wallpaperaccess.com/full/5559091.jpg')] bg-center bg-cover">
          <div className="mx-auto px-8 py-22 max-w-5xl text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-medium mb-8 clean-text">
              <span className="text-linear-accent">Unified Police</span>{' '}
              Department
            </h1>
            <p className="text-lg md:text-xl text-linear-white/90 max-w-3xl mx-auto typing-text leading-relaxed">
              Μια οργάνωση που ιδρύθηκε με σκοπό να φέρει{' '}
              <strong>τάξη, ρεαλισμό και επαγγελματισμό</strong> στο Secret
              Roleplay.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-linear-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div
                className="clean-card p-8 bg-linear-dark rounded-lg hover:bg-linear-gray"
                data-scroll
              >
                <div className="flex items-center mb-6">
                  <i className="ri-shield-star-line text-3xl text-linear-accent mr-4"></i>
                  <h2 className="text-2xl font-medium">Η Αποστολή μας</h2>
                </div>
                <p className="text-linear-white/70 leading-relaxed">
                  Να προσφέρουμε ένα{' '}
                  <strong>ρεαλιστικό, δίκαιο και οργανωμένο</strong> αστυνομικό
                  σύστημα που ενισχύει την εμπειρία roleplay για όλους.
                </p>
              </div>
              <div
                className="clean-card p-8 bg-linear-dark rounded-lg hover:bg-linear-gray"
                data-scroll
              >
                <div className="flex items-center mb-6">
                  <i className="ri-eye-line text-3xl text-linear-accent mr-4"></i>
                  <h2 className="text-2xl font-medium">Το Όραμά μας</h2>
                </div>
                <p className="text-linear-white/70 leading-relaxed">
                  Να γίνουμε η <strong>κορυφαία αστυνομική δύναμη</strong> στο
                  Secret Roleplay, αναγνωρισμένη για την αριστεία και την
                  αφοσίωση.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-20 bg-linear-darker">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-4xl font-medium text-center mb-16" data-scroll>
              Η Ιστορία μας
            </h2>
            <div className="space-y-12">
              <div className="flex items-center gap-8" data-scroll>
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-medium text-linear-accent">
                    Oct 24 2025
                  </span>
                </div>
                <div className="flex-1 clean-card p-6 bg-linear-dark rounded-lg hover:bg-linear-gray">
                  <h3 className="text-xl font-medium mb-2">Ίδρυση του UPD</h3>
                  <p className="text-linear-white/70">
                    Ιδρύθηκε από τον David K. Marshall με στόχο τον ρεαλισμό.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8 flex-row-reverse" data-scroll>
                <div className="flex-shrink-0 w-20 text-left">
                  <span className="text-2xl font-medium text-linear-accent">
                    Nov 2025
                  </span>
                </div>
                <div className="flex-1 clean-card p-6 bg-linear-dark rounded-lg hover:bg-linear-gray">
                  <h3 className="text-xl font-medium mb-2">Επέκταση</h3>
                  <p className="text-linear-white/70">
                    Δημιουργία CID, HSPU, MBU.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8" data-scroll>
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-medium text-linear-accent">
                    Dec 2025
                  </span>
                </div>
                <div className="flex-1 clean-card p-6 bg-linear-dark rounded-lg hover:bg-linear-gray">
                  <h3 className="text-xl font-medium mb-2">2η Επέκταση</h3>
                  <p className="text-linear-white/70">
                    Δημιουργία SWAT & Social Affairs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
