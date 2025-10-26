'use client'

import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ScrollAnimations } from '@/components/ScrollAnimations'
import { useState } from 'react'
import Link from 'next/link'

const IA_PASSWORD = "IntegrityAboveAll#2025"

export default function IAPage() {
  const [password, setPassword] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === IA_PASSWORD) {
      setIsUnlocked(true)
      setError(false)
    } else {
      setError(true)
      setTimeout(() => setError(false), 2500)
      setPassword('')
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
        <div className="bg-[#111] border border-[#333] p-10 rounded-xl max-w-[420px] w-[90%] mx-4 shadow-[0_0_50px_rgba(75,85,99,0.7)] text-center">
          <i className="ri-shield-user-line text-6xl text-[#6B7280] mb-4 block"></i>
          <h2 className="text-2xl font-orbitron mb-2 text-[#6B7280]">TOP SECRET ACCESS</h2>
          <p className="text-sm text-linear-white/60 mb-4">Internal Affairs Division - Eyes Only</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="ENTER CLEARANCE CODE"
            className="w-full bg-[#1a1a1a] border border-[#444] text-white px-4 py-3 rounded-lg mb-4 font-orbitron tracking-[2.5px] text-[1.1rem] uppercase focus:border-[#6B7280] focus:outline-none"
            autoFocus
          />
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-[#6B7280] hover:bg-[#1F2937] text-white text-sm font-medium tracking-wider transition-colors w-full rounded-lg"
          >
            GRANT ACCESS
          </button>
          <p className={`text-[#ef4444] text-sm mt-2 transition-opacity duration-300 ${error ? 'opacity-100' : 'opacity-0'}`}>
            ACCESS DENIED • LOGGED
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
            <span className="text-xs font-orbitron text-[#6B7280]">IA // EYES ONLY</span>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative bg-[linear-gradient(135deg,rgba(75,85,99,0.6),rgba(0,0,0,0.92)),url('https://i.ibb.co/8Xg6Q7V/ia-bg.jpg')] bg-center bg-cover">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_15px,rgba(75,85,99,0.03)_15px,rgba(75,85,99,0.03)_30px)] pointer-events-none"></div>
          <div className="mx-auto px-8 py-22 max-w-5xl text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-orbitron mb-4 leading-tight">
              <span className="text-[#6B7280]">IA</span><br />
              <span className="text-3xl md:text-4xl text-linear-white/80">Internal Affairs Division</span>
            </h1>
            <p className="text-lg text-linear-white/70 max-w-2xl mx-auto typing-text">
              <em className="text-[#6B7280]">«Πίστη. Ακεραιότητα. Δικαιοσύνη. Χωρίς εξαιρέσεις.»</em>
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[20deg] font-orbitron text-[4rem] font-black text-[rgba(107,114,128,0.1)] pointer-events-none z-0 [text-shadow:0_0_20px_rgba(107,114,128,0.2)]">
            TOP SECRET
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20 bg-linear-darker relative">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-orbitron mb-8 text-[#6B7280]" data-scroll>
              <i className="ri-scales-3-line mr-3"></i> MISSION DIRECTIVE
            </h2>
            <p className="text-linear-white/80 leading-relaxed" data-scroll>
              The Internal Affairs Division operates with absolute independence to investigate allegations of misconduct, corruption, and breach of protocol within the UPD.
              <strong> No rank is above scrutiny.</strong> Every action is logged. Every decision is reviewed.
            </p>
          </div>
        </section>

        {/* Active Investigations */}
        <section className="py-12 bg-black relative">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-orbitron text-center mb-10 text-gray-500" data-scroll>
              <i className="ri-folder-warning-line mr-3"></i> ACTIVE INVESTIGATIONS
            </h2>
            <div className="space-y-6">
              <div className="p-5 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 shadow-lg animate-pulse hover:animate-none hover:shadow-xl hover:-translate-y-1" data-scroll>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-white">CASE-IA-025</h3>
                  <span className="text-xs bg-gray-800/50 text-gray-400 px-3 py-1 rounded-full font-medium animate-pulse">
                    ONGOING
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Alleged misuse of force during arrest. Officer under review. Evidence under seal.
                </p>
                <div className="mt-3 flex gap-5 text-xs text-gray-400">
                  <span><i className="ri-time-line mr-1"></i> Opened: 2025-10-18</span>
                  <span><i className="ri-user-search-line mr-1"></i> Lead: IA Agent K. Marshall</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secure Files */}
        <section className="py-20 bg-linear-darker relative">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-orbitron text-center mb-16 text-[#6B7280]" data-scroll>
              CLASSIFIED ARCHIVE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="#" className="p-6 rounded-lg text-center group bg-[rgba(17,17,17,0.9)] border border-[#444] hover:border-[#6B7280] hover:-translate-y-[3px] transition-all relative overflow-hidden" data-scroll>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(107,114,128,0.15)_50%,transparent_70%)] -translate-x-full transition-transform duration-600 group-hover:translate-x-full"></div>
                <i className="ri-file-lock-line text-4xl text-[#6B7280] mb-3 group-hover:scale-110 transition-transform block"></i>
                <h3 className="text-sm font-medium mb-1">IA_SOP.pdf</h3>
                <p className="text-xs text-linear-white/60">Internal Affairs Protocols</p>
              </a>
              <a href="#" className="p-6 rounded-lg text-center group bg-[rgba(17,17,17,0.9)] border border-[#444] hover:border-[#6B7280] hover:-translate-y-[3px] transition-all relative overflow-hidden" data-scroll>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(107,114,128,0.15)_50%,transparent_70%)] -translate-x-full transition-transform duration-600 group-hover:translate-x-full"></div>
                <i className="ri-file-warning-line text-4xl text-orange-600 mb-3 group-hover:scale-110 transition-transform block"></i>
                <h3 className="text-sm font-medium mb-1">Complaint_Log.xlsx</h3>
                <p className="text-xs text-linear-white/60">Citizen & Officer Reports</p>
              </a>
              <a href="#" className="p-6 rounded-lg text-center group bg-[rgba(17,17,17,0.9)] border border-[#444] hover:border-[#6B7280] hover:-translate-y-[3px] transition-all relative overflow-hidden" data-scroll>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(107,114,128,0.15)_50%,transparent_70%)] -translate-x-full transition-transform duration-600 group-hover:translate-x-full"></div>
                <i className="ri-folder-zip-line text-4xl text-gray-500 mb-3 group-hover:scale-110 transition-transform block"></i>
                <h3 className="text-sm font-medium mb-1">Case_Files.zip</h3>
                <p className="text-xs text-linear-white/60">Encrypted Investigation Archive</p>
              </a>
            </div>
            <p className="text-center text-xs text-linear-white/40 mt-8" data-scroll>
              All access is monitored • AES-256 • Biometric verification required
            </p>
          </div>
        </section>

        {/* IA Agents */}
        <section className="py-20 bg-linear-black relative">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-orbitron text-center mb-16 text-[#6B7280]" data-scroll>
              <i className="ri-user-secret-line mr-3"></i> IA AGENTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="p-6 rounded-lg text-center bg-[rgba(17,17,17,0.95)] border border-[#333] hover:border-[#D1D5DB] hover:scale-105 transition-all relative" data-scroll>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#D1D5DB]">
                  <img src="https://placehold.co/96x96/1F2937/FFFFFF?text=KM" alt="Agent K. Marshall" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-medium">K. Marshall</h3>
                <p className="text-linear-white/70 text-sm mb-2">Lead Investigator</p>
                <div className="inline-block bg-[#D1D5DB] text-black font-bold text-[0.7rem] px-2 py-1 rounded tracking-wide">IA LEAD</div>
              </div>
              <div className="p-6 rounded-lg text-center bg-[rgba(17,17,17,0.95)] border border-[#333] hover:border-[#D1D5DB] hover:scale-105 transition-all relative" data-scroll>
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#D1D5DB]">
                  <img src="https://placehold.co/96x96/1F2937/FFFFFF?text=NS" alt="Agent N. Stone" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-medium">N. Stone</h3>
                <p className="text-linear-white/70 text-sm mb-2">Ethics & Compliance</p>
                <div className="inline-block bg-[#D1D5DB] text-black font-bold text-[0.7rem] px-2 py-1 rounded tracking-wide">COMPLIANCE</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-linear-gray-lighter text-center text-linear-white/40 text-xs">
        <p>UNAUTHORIZED ACCESS IS A FELONY • IA DIVISION • SECRET ROLEPLAY UPD</p>
        <p className="mt-2">© 2025 SR-UPD • ALL ACTIONS LOGGED</p>
      </footer>
    </>
  )
}
