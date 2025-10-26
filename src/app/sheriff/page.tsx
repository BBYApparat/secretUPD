'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollAnimations } from '@/components/ScrollAnimations'
import Image from 'next/image'
import { useState } from 'react'

export default function SheriffPage() {
  const [showFullProfile, setShowFullProfile] = useState(false)

  return (
    <>
      <Navigation />
      <ScrollAnimations />
      <main className="bg-gradient-to-b from-[#6a4719] to-[#a09765]">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative"
        >
          <div className="mx-auto px-8 py-22">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-18">
                <h1 className="text-5xl md:text-6xl font-medium mb-8 clean-text">
                  UPD
                  <span className="block text-[#5D3E39]">Sheriff</span>
                </h1>
                <p className="text-lg text-linear-white/80 typing-text max-w-xl mx-auto">
                  Ο Oakley Neil Ceasar γεννήθηκε και μεγάλωσε σε μια μικρή φάρμα
                  στα βόρεια του Blaine County, μακριά από τη ζωή της πόλης. Από
                  μικρός έδειξε έντονη αίσθηση δικαιοσύνης και αφοσίωση στην
                  κοινότητα, βοηθώντας τους γείτονες και συμμετέχοντας σε
                  τοπικές πρωτοβουλίες. Η οικογένειά του τον μεγάλωσε με αξίες
                  όπως σεβασμός, τιμή και υπευθυνότητα, που έγιναν θεμέλια της
                  ηγεσίας του. Μετά την αποφοίτηση από το Blaine County High, ο
                  Ceasar εντάχθηκε στο Blaine County Police Academy,
                  αποφασισμένος να υπηρετήσει τον τόπο του και να προστατεύσει
                  τους πολίτες της επαρχίας.
                </p>

                {/* Profile Card */}
                <article
                  className="mt-16 max-w-4xl mx-auto bg-gradient-to-b from-white/[0.02] to-white/[0.01] border border-white/[0.04] rounded-xl flex flex-col md:flex-row gap-5 p-5 items-start shadow-[0_8px_28px_rgba(2,6,23,0.6)]"
                  role="article"
                  aria-labelledby="sheriff-name"
                >
                  <figure className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 border-white/[0.06] bg-gradient-to-b from-[#0c1220] to-[#09101a] flex items-center justify-center mx-auto md:mx-0">
                    <Image
                      src="https://via.placeholder.com/100"
                      alt="Sheriff Oakley Neil Ceasar portrait"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </figure>

                  <div className="flex-1 text-center md:text-left">
                    <h2 id="sheriff-name" className="text-xl font-medium mb-1">
                      Oakley Neil Ceasar{' '}
                      <small className="text-black font-semibold">
                        — Sheriff
                      </small>
                    </h2>
                    <div className="text-black text-sm mt-1.5">
                      Blaine County Sheriff's Office • Sheriff • 22+ χρόνια
                      υπηρεσίας
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2 justify-center md:justify-start">
                      <span className="bg-white/[0.03] px-2.5 py-1.5 rounded-full text-xs text-black border border-white/[0.02]">
                        Blaine County Sheriff
                      </span>
                      <span className="bg-white/[0.03] px-2.5 py-1.5 rounded-full text-xs text-black border border-white/[0.02]">
                        Community Policing
                      </span>
                      <span className="bg-white/[0.03] px-2.5 py-1.5 rounded-full text-xs text-black border border-white/[0.02]">
                        Tactical Response
                      </span>
                      <span className="bg-white/[0.03] px-2.5 py-1.5 rounded-full text-xs text-black border border-white/[0.02]">
                        Search & Rescue
                      </span>
                    </div>

                    <p className="mt-3 text-black leading-relaxed text-sm">
                      Ο Sheriff Oakley Neil Ceasar ηγείται του Blaine County
                      Sheriff's Office με αυστηρότητα και δίκαιη προσέγγιση.
                      Γνωστός για την ικανότητά του να χειρίζεται κρίσεις, την
                      εστίασή του στη δημόσια ασφάλεια και την προώθηση της
                      συνεργασίας μεταξύ των τμημάτων, είναι αφοσιωμένος στη
                      διατήρηση της τάξης σε ολόκληρη την επαρχία.
                    </p>

                    <div
                      className="mt-3 flex flex-col md:flex-row gap-2.5"
                      role="list"
                    >
                      <div
                        className="bg-gradient-to-b from-white/[0.02] to-white/[0.01] p-2.5 rounded-lg flex-1 text-center border border-white/[0.03]"
                        role="listitem"
                      >
                        <div className="font-bold text-lg">22+</div>
                        <div className="text-xs text-black mt-1">
                          Έτη Υπηρεσίας
                        </div>
                      </div>
                      <div
                        className="bg-gradient-to-b from-white/[0.02] to-white/[0.01] p-2.5 rounded-lg flex-1 text-center border border-white/[0.03]"
                        role="listitem"
                      >
                        <div className="font-bold text-lg">2010</div>
                        <div className="text-xs text-black mt-1">
                          Έτος Ανάληψης
                        </div>
                      </div>
                      <div
                        className="bg-gradient-to-b from-white/[0.02] to-white/[0.01] p-2.5 rounded-lg flex-1 text-center border border-white/[0.03]"
                        role="listitem"
                      >
                        <div className="font-bold text-lg">County-wide</div>
                        <div className="text-xs text-black mt-1">
                          Jurisdiction
                        </div>
                      </div>
                    </div>

                    <div className="mt-3.5 p-3 border-l-[3px] border-[#7b879e] bg-white/[0.01] rounded-md text-sm italic">
                      &quot;Law enforcement isn&apos;t about authority —
                      it&apos;s about responsibility. Every decision affects
                      lives.&quot;
                      <br />
                      <strong className="block mt-2 text-[#cbd6e3] not-italic">
                        — Sheriff Oakley N. Ceasar
                      </strong>
                    </div>

                    <div className="mt-3.5 flex gap-2 flex-wrap justify-center md:justify-start">
                      <button
                        className="bg-[#5D3E39] text-white px-3 py-2 rounded-lg text-sm hover:bg-[#4a3129] transition-colors"
                        onClick={() => setShowFullProfile(!showFullProfile)}
                      >
                        {showFullProfile ? 'Hide' : 'Find Him'}
                      </button>
                      <button
                        className="bg-transparent border border-white/[0.06] text-white px-3 py-2 rounded-lg text-sm hover:bg-white/[0.05] transition-colors"
                        onClick={() => alert('Report Incident placeholder')}
                      >
                        Report Incident
                      </button>
                    </div>
                  </div>
                </article>

                {/* Full Profile */}
                {showFullProfile && (
                  <section
                    className="mt-3.5 max-w-4xl mx-auto bg-gradient-to-b from-white/[0.01] to-white/[0.005] border border-white/[0.03] rounded-lg p-4 text-black"
                    aria-labelledby="fullTitle"
                  >
                    <h2 id="fullTitle" className="text-white mb-2">
                      Full Profile — Oakley Neil Ceasar
                    </h2>
                    <p className="mb-4">
                      Sheriff Oakley Neil Ceasar oversees the Blaine County
                      Sheriff's Office with a focus on tactical operations,
                      community engagement, and public safety initiatives. Below
                      is his career timeline and key highlights.
                    </p>

                    <div className="flex flex-col gap-2 mb-4">
                      <div className="bg-white/[0.01] p-2.5 rounded-lg border border-white/[0.02]">
                        <span className="text-white font-bold">1998</span> —
                        Began law enforcement career in Blaine County as Deputy
                        Sheriff.
                      </div>
                      <div className="bg-white/[0.01] p-2.5 rounded-lg border border-white/[0.02]">
                        <span className="text-white font-bold">2005</span> —
                        Promoted to Lieutenant; managed tactical response and
                        patrol operations.
                      </div>
                      <div className="bg-white/[0.01] p-2.5 rounded-lg border border-white/[0.02]">
                        <span className="text-white font-bold">2010</span> —
                        Elected/appointed as Sheriff of Blaine County; initiated
                        modern community policing programs.
                      </div>
                      <div className="bg-white/[0.01] p-2.5 rounded-lg border border-white/[0.02]">
                        <span className="text-white font-bold">
                          2015–Present
                        </span>{' '}
                        — Expanded Search & Rescue teams, implemented
                        county-wide safety protocols, coordinated cross-agency
                        crisis responses.
                      </div>
                    </div>

                    <h3 className="text-white mt-3 mb-2">Notable Traits</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        Strong leadership with a focus on ethical law
                        enforcement.
                      </li>
                      <li>
                        Community-oriented approach for improved citizen trust.
                      </li>
                      <li>
                        Expertise in tactical operations and crisis management.
                      </li>
                      <li>
                        Promotes inter-agency cooperation and training.
                      </li>
                    </ul>

                    <div className="mt-3 flex gap-2">
                      <button
                        className="bg-[#5D3E39] text-white px-3 py-2 rounded-lg text-sm hover:bg-[#4a3129] transition-colors"
                        onClick={() => setShowFullProfile(false)}
                      >
                        Close
                      </button>
                      <a
                        href="#"
                        className="bg-transparent border border-white/[0.06] text-white px-3 py-2 rounded-lg text-sm hover:bg-white/[0.05] transition-colors inline-block"
                      >
                        Download Profile (PDF)
                      </a>
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
