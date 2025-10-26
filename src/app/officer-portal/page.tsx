import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'], weight: ['500', '700'] })

export const metadata = {
  title: 'Officer Portal - SR UPD',
  description: 'Officer Portal for Secret Roleplay UPD',
}

export default function OfficerPortalPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-linear-black via-linear-dark to-linear-gray">
        <div className="bg-[rgba(31,41,55,0.7)] backdrop-blur-2xl border border-linear-accent/30 rounded-3xl p-10 max-w-md w-full shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          <div className="text-center mb-8">
            <i className="ri-shield-user-line text-6xl text-linear-blue mb-4"></i>
            <h1
              className={`${orbitron.className} text-3xl text-linear-accent mb-2`}
            >
              Coming Up Soon!
            </h1>
            <p className="text-linear-white/70 mt-2">
              This Page is Under Development
            </p>
          </div>

          {/* Coming Soon Note */}
          <div className="mt-8 p-4 bg-linear-accent/10 border border-linear-accent/30 rounded-lg">
            <p className="text-sm text-linear-white/80 text-center">
              The Officer Portal will allow SR-UPD members to access internal
              resources, schedules, and department information.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
