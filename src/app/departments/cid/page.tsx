'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollAnimations } from '@/components/ScrollAnimations'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const CID_PASSWORD = "CIDForTheWin#2025"

export default function CIDPage() {
  const [password, setPassword] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === CID_PASSWORD) {
      setIsUnlocked(true)
      setError(false)
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e as any)
    }
  }

  if (!isUnlocked) {
    return (
      <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center transition-opacity duration-600">
        <div className="bg-[#111] border border-[#333] p-8 rounded-xl max-w-[420px] w-[90%] mx-4 shadow-[0_0_40px_rgba(139,0,0,0.6)] text-center">
          <i className="ri-shield-keyhole-line text-5xl text-[#8B0000] mb-4 block"></i>
          <h2 className="text-2xl font-orbitron mb-2 text-[#8B0000]">CLASSIFIED ACCESS</h2>
          <p className="text-sm text-linear-white/60 mb-4">CID Division - Restricted Area</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="ENTER ACCESS CODE"
            className="w-full bg-[#1a1a1a] border border-[#444] text-white px-4 py-3 rounded-lg mb-4 font-orbitron tracking-[2px] text-[1.1rem] focus:border-[#8B0000] focus:outline-none"
            autoFocus
          />
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-[#8B0000] hover:bg-[#450000] text-white text-sm font-medium tracking-wider transition-colors w-full rounded-lg"
          >
            ACCESS
          </button>
          <p className={`text-[#ff4444] text-sm mt-2 transition-opacity duration-300 ${error ? 'opacity-100' : 'opacity-0'}`}>
            ACCESS DENIED
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <ScrollAnimations />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-[rgba(5,5,5,0.95)] backdrop-blur-[20px]" data-nav>
        <div className="mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-sm font-medium tracking-wide opacity-80 hover:opacity-100 transition-opacity">
              <i className="ri-arrow-left-s-line"></i> Back to UPD
            </Link>
            <span className="text-xs font-orbitron text-[#8B0000]">CID // RESTRICTED</span>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative bg-[linear-gradient(135deg,rgba(139,0,0,0.5),rgba(0,0,0,0.9)),url('https://i.ibb.co/1f2mMLbn/CID.png')] bg-center bg-cover">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(139,0,0,0.05)_10px,rgba(139,0,0,0.05)_20px)] pointer-events-none"></div>
          <div className="mx-auto px-8 py-22 max-w-5xl text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-orbitron mb-4 leading-tight">
              <span className="text-[#8B0000]">CID</span><br />
              <span className="text-3xl md:text-4xl text-linear-white/80">Criminal Investigation Division</span>
            </h1>
            <p className="text-lg text-linear-white/70 max-w-2xl mx-auto typing-text">
              <em className="text-[#8B0000]">«Η αλήθεια κρύβεται στα σκοτάδια. Εμείς την φέρνουμε στο φως.»</em>
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[15deg] font-orbitron text-[3.5rem] text-[rgba(139,0,0,0.12)] pointer-events-none z-0 [text-shadow:0_0_15px_rgba(139,0,0,0.3)]">
            CLASSIFIED
          </div>
        </section>

        {/* SOP Section */}
        <section className="py-20 bg-linear-darker relative">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-orbitron text-center mb-16 text-[#8B0000]" data-scroll>
              <i className="ri-file-shield-2-line mr-3"></i> STANDARD OPERATING PROCEDURES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-lg hover:border-[#8B0000] transition-all bg-[rgba(17,17,17,0.85)] border border-[#444]" data-scroll>
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <i className="ri-search-eye-line text-[#8B0000] mr-2"></i> Case Intake Protocol
                </h3>
                <ul className="space-y-2 text-linear-white/70 text-sm">
                  <li><i className="ri-checkbox-circle-line text-[#8B0000] mr-2"></i> All cases assigned via encrypted channel</li>
                  <li><i className="ri-checkbox-circle-line text-[#8B0000] mr-2"></i> Initial report within 6 hours</li>
                  <li><i className="ri-checkbox-circle-line text-[#8B0000] mr-2"></i> Evidence logged in sealed digital vault</li>
                </ul>
              </div>
              <div className="p-8 rounded-lg hover:border-[#8B0000] transition-all bg-[rgba(17,17,17,0.85)] border border-[#444]" data-scroll>
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <i className="ri-user-search-line text-[#8B0000] mr-2"></i> Surveillance Rules
                </h3>
                <ul className="space-y-2 text-linear-white/70 text-sm">
                  <li><i className="ri-checkbox-circle-line text-[#8B0000] mr-2"></i> 48-hour max without warrant</li>
                  <li><i className="ri-checkbox-circle-line text-[#8B0000] mr-2"></i> All footage encrypted & timestamped</li>
                  <li><i className="ri-checkbox-circle-line text-[#8B0000] mr-2"></i> No civilian involvement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Active Operations */}
        <section className="py-12 bg-black relative">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-orbitron text-center mb-10 text-red-600" data-scroll>
              <i className="ri-folder-search-line mr-3"></i> ACTIVE OPERATIONS
            </h2>
            <div className="space-y-6">
              <div className="p-5 rounded-lg border border-gray-700 hover:border-red-600 transition-all duration-300 shadow-lg" data-scroll>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-white">OP-2025-Alpha</h3>
                  <span className="text-xs bg-red-900/30 text-red-500 px-3 py-1 rounded-full font-medium">HIGH PRIORITY</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Organized smuggling ring operating through port. 3 suspects in custody. Interrogation in progress.
                </p>
                <div className="mt-3 flex gap-5 text-xs text-gray-400">
                  <span><i className="ri-time-line mr-1"></i> Started: 2025-10-20</span>
                  <span><i className="ri-team-line mr-1"></i> Lead: Det. J. Davenport</span>
                </div>
              </div>
              <div className="p-5 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 shadow-lg animate-pulse hover:animate-none hover:shadow-xl hover:-translate-y-1" data-scroll>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-white">OP-2025-Bravo</h3>
                  <span className="text-xs bg-orange-900/30 text-orange-400 px-3 py-1 rounded-full font-medium animate-pulse">MEDIUM PRIORITY</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Financial fraud investigation. Multiple bank accounts frozen. Forensic analysis ongoing.
                </p>
                <div className="mt-3 flex gap-5 text-xs text-gray-400">
                  <span><i className="ri-time-line mr-1"></i> Started: 2025-10-15</span>
                  <span><i className="ri-team-line mr-1"></i> Lead: Det. A. Reynolds</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* File Vault */}
        <section className="py-20 bg-linear-darker relative">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-orbitron text-center mb-16 text-[#8B0000]" data-scroll>
              SECURE FILE VAULT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="https://docs.google.com/presentation/d/1i1-VQFP5nG2UkHrOJ8cPsged62vsZYMFnXHpyNOIfi4/edit?usp=sharing" target="_blank" className="p-6 rounded-lg text-center group bg-[rgba(17,17,17,0.85)] border border-[#444] hover:border-[#8B0000] hover:-translate-y-[3px] transition-all relative overflow-hidden" data-scroll>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(139,0,0,0.15)_50%,transparent_70%)] -translate-x-full transition-transform duration-600 group-hover:translate-x-full"></div>
                <i className="ri-file-text-line text-4xl text-[#8B0000] mb-3 group-hover:scale-110 transition-transform block"></i>
                <h3 className="text-sm font-medium mb-1">CID_SOP.pdf</h3>
                <p className="text-xs text-linear-white/60">Standard Operating Procedures</p>
              </a>
              <a href="https://cid-evidence-hub-ba7d54e0.base44.app" target="_blank" className="p-6 rounded-lg text-center group bg-[rgba(17,17,17,0.85)] border border-[#444] hover:border-[#8B0000] hover:-translate-y-[3px] transition-all relative overflow-hidden" data-scroll>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(139,0,0,0.15)_50%,transparent_70%)] -translate-x-full transition-transform duration-600 group-hover:translate-x-full"></div>
                <i className="ri-file-excel-2-line text-4xl text-green-600 mb-3 group-hover:scale-110 transition-transform block"></i>
                <h3 className="text-sm font-medium mb-1">Evidence_Log.xlsx</h3>
                <p className="text-xs text-linear-white/60">Digital Evidence Tracker</p>
              </a>
              <a href="#" className="p-6 rounded-lg text-center group bg-[rgba(17,17,17,0.85)] border border-[#444] hover:border-[#8B0000] hover:-translate-y-[3px] transition-all relative overflow-hidden" data-scroll>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(139,0,0,0.15)_50%,transparent_70%)] -translate-x-full transition-transform duration-600 group-hover:translate-x-full"></div>
                <i className="ri-folder-zip-line text-4xl text-orange-600 mb-3 group-hover:scale-110 transition-transform block"></i>
                <h3 className="text-sm font-medium mb-1">Suspect_Database.zip</h3>
                <p className="text-xs text-linear-white/60">Encrypted Suspect Files</p>
              </a>
            </div>
            <p className="text-center text-xs text-linear-white/50 mt-8" data-scroll>
              All files are encrypted with AES-256. Access logs recorded.
            </p>
          </div>
        </section>

        {/* Detective Roster */}
        <section className="py-20 bg-linear-black relative">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-orbitron text-center mb-16 text-[#8B0000]" data-scroll>
              <i className="ri-team-line mr-3"></i> DETECTIVE ROSTER
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg text-center bg-[rgba(17,17,17,0.9)] border border-[#333] hover:border-[#FFD700] hover:scale-105 transition-all relative" data-scroll>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#FFD700]">
                  <img src="https://placehold.co/96x96/333333/FFFFFF?text=JD" alt="Det. Jason Davenport" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-medium">Jason S. Davenport</h3>
                <p className="text-linear-white/70 text-sm mb-2">Head of CID</p>
                <div className="inline-block bg-[#FFD700] text-black font-bold text-[0.7rem] px-2 py-1 rounded tracking-wide">LEAD DETECTIVE</div>
              </div>
              <div className="p-6 rounded-lg text-center bg-[rgba(17,17,17,0.9)] border border-[#333] hover:border-[#FFD700] hover:scale-105 transition-all relative" data-scroll>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#FFD700]">
                  <img src="https://placehold.co/96x96/222222/FFFFFF?text=AR" alt="Det. Alex Reynolds" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-medium">Alex Reynolds</h3>
                <p className="text-linear-white/70 text-sm mb-2">Senior Detective</p>
                <div className="inline-block bg-[#FFD700] text-black font-bold text-[0.7rem] px-2 py-1 rounded tracking-wide">SR. DETECTIVE</div>
              </div>
              <div className="p-6 rounded-lg text-center bg-[rgba(17,17,17,0.9)] border border-[#333] hover:border-[#FFD700] hover:scale-105 transition-all relative" data-scroll>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#FFD700]">
                  <img src="https://placehold.co/96x96/222222/FFFFFF?text=MC" alt="Det. Mia Chen" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-medium">Mia Chen</h3>
                <p className="text-linear-white/70 text-sm mb-2">Forensics Specialist</p>
                <div className="inline-block bg-[#FFD700] text-black font-bold text-[0.7rem] px-2 py-1 rounded tracking-wide">FORENSICS</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-linear-gray-lighter text-center text-linear-white/50 text-xs">
        <p>UNAUTHORIZED ACCESS IS A FEDERAL OFFENSE • CID DIVISION • SECRET ROLEPLAY UPD</p>
      </footer>
    </>
  )
}
