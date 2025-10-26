import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'], weight: ['700', '900'] })

export const metadata = {
  title: 'R&T Division - Recruitment & Training - SR UPD',
  description: 'Recruitment and Training Division of the Unified Police Department',
}

export default function RTPage() {
  return (
    <>
      <Navigation />
      <main className="bg-black text-white min-h-screen">
        {/* Hero */}
        <section className="min-h-screen bg-[linear-gradient(135deg,rgba(0,0,0,0.85),rgba(10,10,10,0.95)),url('https://i.ibb.co/5Xk9ggBj/New-Project-4.png')] bg-center bg-cover flex items-center justify-center text-center relative overflow-hidden">
          <div className="relative z-10 px-4">
            <h1
              className={`${orbitron.className} text-7xl md:text-8xl font-black mb-4 bg-gradient-to-r from-[#3B82F6] to-[#FBBF24] bg-clip-text text-transparent tracking-wider`}
              style={{
                textShadow: '0 0 40px rgba(59, 130, 246, 0.7)',
              }}
            >
              R&T
            </h1>
            <p className="text-2xl md:text-3xl font-medium mb-12">
              Recruitment & Training Division
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="px-8 py-3 bg-gradient-to-br from-[#1e40af] to-[#3B82F6] text-white rounded-2xl font-bold uppercase tracking-wider hover:scale-105 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.6)]"
              >
                Join Now
              </a>
              <a
                href="#"
                className="px-8 py-3 bg-gradient-to-br from-[#ca8a04] to-[#FBBF24] text-black rounded-2xl font-bold uppercase tracking-wider hover:scale-105 transition-transform shadow-[0_0_20px_rgba(251,191,36,0.6)]"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Τι είναι το R&T;
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] p-6 rounded-2xl border-2 border-transparent hover:border-[#3B82F6] transition-all hover:-translate-y-3 shadow-lg">
                <h3 className="text-2xl font-bold mb-3">Εκπαίδευση</h3>
                <p className="text-gray-400">
                  Εκπαίδευση νέων μελών και συνεχή κατάρτιση του προσωπικού με
                  τις πιο σύγχρονες τεχνικές αστυνόμευσης.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] p-6 rounded-2xl border-2 border-transparent hover:border-[#3B82F6] transition-all hover:-translate-y-3 shadow-lg">
                <h3 className="text-2xl font-bold mb-3">Πρόσληψη</h3>
                <p className="text-gray-400">
                  Αξιολόγηση και πρόσληψη νέων αστυνομικών που ταιριάζουν με τις
                  αξίες και τα standards του UPD.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] p-6 rounded-2xl border-2 border-transparent hover:border-[#3B82F6] transition-all hover:-translate-y-3 shadow-lg">
                <h3 className="text-2xl font-bold mb-3">Εξέλιξη</h3>
                <p className="text-gray-400">
                  Συνεχής υποστήριξη και ευκαιρίες εξέλιξης για κάθε μέλος της
                  αστυνομικής δύναμης.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
