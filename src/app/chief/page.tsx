'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollAnimations } from '@/components/ScrollAnimations'
import Image from 'next/image'

export default function ChiefPage() {
  return (
    <>
      <Navigation />
      <ScrollAnimations />
      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative"
        >
          <div className="mx-auto px-8 py-22">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-18">
                <h1 className="text-5xl md:text-6xl font-medium mb-8 clean-text">
                  UPD
                  <span className="block text-linear-accent">Chief Of Police</span>
                </h1>
                <p className="text-lg text-linear-white/60 typing-text max-w-xl mx-auto">
                  Ο David Marshall γεννήθηκε και μεγάλωσε στα προάστια του San
                  Fierro. Από μικρός έδειχνε έντονη αίσθηση δικαιοσύνης, ο
                  πατέρας του ήταν βετεράνος του San Andreas Army και η μητέρα
                  του δασκάλα. Η ανατροφή του βασίστηκε σε τρεις αρχές:
                  σεβασμός, πειθαρχία και τιμή. Στα 18 του, μετά την αποφοίτηση
                  από το San Fierro High, μπήκε στην Police Academy του San
                  Andreas, αποφασισμένος να ακολουθήσει το επάγγελμα του πατέρα
                  του, αλλά με στολή μπλε αντί για χακί.
                </p>

                {/* Profile Card */}
                <article
                  className="mt-16 max-w-3xl mx-auto bg-gradient-to-b from-white/[0.02] to-white/[0.01] border border-white/[0.04] rounded-xl flex flex-col md:flex-row gap-5 p-5 items-start shadow-[0_6px_24px_rgba(2,6,23,0.6)]"
                  role="article"
                  aria-labelledby="chief-name"
                >
                  <figure className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 border-white/[0.06] bg-gradient-to-b from-[#0c1220] to-[#09101a] flex items-center justify-center mx-auto md:mx-0">
                    <Image
                      src="https://via.placeholder.com/100"
                      alt="David K. Marshall portrait"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </figure>

                  <div className="flex-1 text-center md:text-left">
                    <h2 id="chief-name" className="text-xl font-medium mb-1">
                      David K. Marshall{' '}
                      <small className="text-[#9aa6b2] font-semibold">
                        — Chief of Police
                      </small>
                    </h2>
                    <div className="text-[#9aa6b2] text-sm mt-1">
                      Los Santos Police Department • Chief since 2023 • 25+
                      years service
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2 justify-center md:justify-start">
                      <span className="bg-white/[0.03] px-2.5 py-1.5 rounded-full text-xs text-[#9aa6b2] border border-white/[0.02]">
                        Maintains Department
                      </span>
                      <span className="bg-white/[0.03] px-2.5 py-1.5 rounded-full text-xs text-[#9aa6b2] border border-white/[0.02]">
                        Head Of Internal Affairs (IA)
                      </span>
                    </div>

                    <p className="mt-3.5 text-[#9aa6b2] leading-relaxed text-sm">
                      Ο Chief David Kenneth Marshall μεγάλωσε στο San Fierro και
                      υπηρετεί το LSPD πάνω από 25 χρόνια. Γνωστός για την
                      ψυχραιμία, την πειθαρχία και την προσήλωση στη διαφάνεια,
                      ο Marshall προωθεί την αστυνομία ως θεσμό εμπιστοσύνης
                      προς την κοινότητα.
                    </p>

                    <div className="mt-3.5 flex flex-col md:flex-row gap-3" role="list">
                      <div
                        className="bg-gradient-to-b from-white/[0.02] to-white/[0.01] p-2.5 rounded-lg flex-1 text-center border border-white/[0.03]"
                        role="listitem"
                      >
                        <div className="font-bold text-lg">25+</div>
                        <div className="text-xs text-[#9aa6b2] mt-1">
                          Έτη Υπηρεσίας
                        </div>
                      </div>
                      <div
                        className="bg-gradient-to-b from-white/[0.02] to-white/[0.01] p-2.5 rounded-lg flex-1 text-center border border-white/[0.03]"
                        role="listitem"
                      >
                        <div className="font-bold text-lg">2023</div>
                        <div className="text-xs text-[#9aa6b2] mt-1">
                          Chief since
                        </div>
                      </div>
                      <div
                        className="bg-gradient-to-b from-white/[0.02] to-white/[0.01] p-2.5 rounded-lg flex-1 text-center border border-white/[0.03]"
                        role="listitem"
                      >
                        <div className="font-bold text-lg">3</div>
                        <div className="text-xs text-[#9aa6b2] mt-1">
                          Major Ops Led
                        </div>
                      </div>
                    </div>

                    <blockquote className="mt-3.5 p-3 border-l-[3px] border-[#1f6feb] bg-gradient-to-r from-[#1f6feb]/[0.02] to-transparent rounded-md text-sm">
                      &quot;We don&apos;t protect power. We protect people.&quot; —
                      Chief David K. Marshall
                    </blockquote>

                    <div className="mt-3.5 flex gap-2 flex-wrap justify-center md:justify-start">
                      <a
                        href="#"
                        className="bg-[#1f6feb] text-white px-3 py-2 rounded-lg text-sm hover:bg-[#1a5acc] transition-colors"
                      >
                        View Full Profile
                      </a>
                      <button
                        className="bg-transparent border border-white/[0.06] text-white px-3 py-2 rounded-lg text-sm hover:bg-white/[0.05] transition-colors"
                        onClick={() => alert('Incident report modal placeholder')}
                      >
                        Report Incident
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
