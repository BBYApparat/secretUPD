'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollAnimations } from '@/components/ScrollAnimations'
import Image from 'next/image'

export default function AssistantChiefPage() {
  return (
    <>
      <Navigation />
      <ScrollAnimations />
      <main>
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative"
        >
          <div className="mx-auto px-8 py-22">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-18">
                <h1 className="text-5xl md:text-6xl font-medium mb-8 clean-text">
                  UPD
                  <span className="block text-linear-accent">
                    Assistant Chief Of Police
                  </span>
                </h1>
                <p className="text-lg text-linear-white/60 typing-text max-w-xl mx-auto">
                  Ο Jason Samuel Davenport είναι μισός Σουηδός και μισός
                  Αμερικανός, γεννημένος στη Στοκχόλμη της Σουηδίας το 1996. Από
                  μικρή ηλικία, έδειξε ενδιαφέρον για τη στρατιωτική πειθαρχία
                  και την ομαδική συνεργασία, επηρεασμένος από τον πατέρα του
                  πρώην αξιωματικό της Σουηδικής Αστυνομίας και τη μητέρα του,
                  Αμερικανίδα νοσοκόμα από το San Andreas. Στην ηλικία των 16
                  ετών, η οικογένειά του μετακόμισε στο Los Santos, όπου ο Jason
                  αποφοίτησε από το Los Santos High και συνέχισε τις σπουδές του
                  στη Criminal Justice στο UCLA San Andreas. Η δίγλωσση
                  κουλτούρα και η ψυχραιμία του τον βοήθησαν να προσαρμοστεί
                  γρήγορα στο πολυπολιτισμικό περιβάλλον της πόλης.
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
                      alt="Jason S. Davenport portrait"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </figure>

                  <div className="flex-1 text-center md:text-left">
                    <h2 id="chief-name" className="text-xl font-medium mb-1">
                      Jason S. Davenport{' '}
                      <small className="text-[#9aa6b2] font-semibold">
                        — Assistant Chief of Police
                      </small>
                    </h2>
                    <div className="text-[#9aa6b2] text-sm mt-1">
                      Los Santos Police Department • Assistant Chief since 2023
                      • 20+ years service
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2 justify-center md:justify-start">
                      <span className="bg-white/[0.03] px-2.5 py-1.5 rounded-full text-xs text-[#9aa6b2] border border-white/[0.02]">
                        Maintains Department
                      </span>
                      <span className="bg-white/[0.03] px-2.5 py-1.5 rounded-full text-xs text-[#9aa6b2] border border-white/[0.02]">
                        Head Of Criminal Investigations Division (CID)
                      </span>
                      <span className="bg-white/[0.03] px-2.5 py-1.5 rounded-full text-xs text-[#9aa6b2] border border-white/[0.02]">
                        Member of (IA)
                      </span>
                    </div>

                    <p className="mt-3.5 text-[#9aa6b2] leading-relaxed text-sm">
                      Ο Assistant Chief Jason Sam Davenport είναι γνωστός για την
                      στρατηγική του σκέψη και την ικανότητά του να ηρεμεί κάθε
                      κρίση. Με καταγωγή από το San Fierro, υπηρέτησε ως
                      Detective, Captain και Deputy Chief πριν αναλάβει τη θέση
                      του Assistant Chief. Είναι υπέρμαχος της εκπαίδευσης, της
                      πειθαρχίας και της συνεργασίας ανάμεσα στα σώματα
                      ασφαλείας του Los Santos.
                    </p>

                    <div
                      className="mt-3.5 flex flex-col md:flex-row gap-3"
                      role="list"
                    >
                      <div
                        className="bg-gradient-to-b from-white/[0.02] to-white/[0.01] p-2.5 rounded-lg flex-1 text-center border border-white/[0.03]"
                        role="listitem"
                      >
                        <div className="font-bold text-lg">20+</div>
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
                          Assistant Chief since
                        </div>
                      </div>
                      <div
                        className="bg-gradient-to-b from-white/[0.02] to-white/[0.01] p-2.5 rounded-lg flex-1 text-center border border-white/[0.03]"
                        role="listitem"
                      >
                        <div className="font-bold text-lg">4</div>
                        <div className="text-xs text-[#9aa6b2] mt-1">
                          Major Ops Coordinated
                        </div>
                      </div>
                    </div>

                    <blockquote className="mt-3.5 p-3 border-l-[3px] border-[#1f6feb] bg-gradient-to-r from-[#1f6feb]/[0.02] to-transparent rounded-md text-sm">
                      &quot;Justice isn&apos;t about emotion — it&apos;s about
                      precision. Feelings cloud judgment. Facts don&apos;t&quot;
                      — Asst. Chief Jason S. Davenport
                    </blockquote>

                    <div className="mt-3.5 flex gap-2 flex-wrap justify-center md:justify-start">
                      <a
                        href="https://steamcommunity.com/id/calibergr21/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1f6feb] text-white px-3 py-2 rounded-lg text-sm hover:bg-[#1a5acc] transition-colors"
                      >
                        Find Him
                      </a>
                      <button
                        className="bg-transparent border border-white/[0.06] text-white px-3 py-2 rounded-lg text-sm hover:bg-white/[0.05] transition-colors"
                        onClick={() =>
                          alert('Incident report modal placeholder')
                        }
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
