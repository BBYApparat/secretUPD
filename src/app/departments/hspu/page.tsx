'use client'

import { useState } from 'react'
import { ScrollAnimations } from '@/components/ScrollAnimations'
import Link from 'next/link'

const HSPU_PASSWORD = "HSPU2025"

const hspuMembers = [
  { name: "Sgt. Marcus Reyes", role: "Lead • Pursuit Commander", img: "https://i.pravatar.cc/150?u=marcus" },
  { name: "Officer Tyler Brooks", role: "PIT Maneuver Specialist", img: "https://i.pravatar.cc/150?u=tyler" },
  { name: "Officer Alex Kane", role: "Highway Interceptor", img: "https://i.pravatar.cc/150?u=alex" },
  { name: "Officer Diego Ramirez", role: "Tactical Driver", img: "https://i.pravatar.cc/150?u=diego" },
  { name: "Officer Jordan Hayes", role: "Roadblock Expert", img: "https://i.pravatar.cc/150?u=jordan" },
  { name: "Officer Elena Voss", role: "Aerial Support Liaison", img: "https://i.pravatar.cc/150?u=elena" },
]

const mbuMembers = [
  { name: "Officer Lena Chen", role: "Commander • Traffic Lead", img: "https://i.pravatar.cc/150?u=lena" },
  { name: "Officer Sofia Vega", role: "Urban Patrol Specialist", img: "https://i.pravatar.cc/150?u=sofia" },
  { name: "Officer Ryan Holt", role: "VIP Escort & Protection", img: "https://i.pravatar.cc/150?u=ryan" },
  { name: "Officer Minh Nguyen", role: "Stunt & Pursuit Rider", img: "https://i.pravatar.cc/150?u=minh" },
  { name: "Officer Aisha Patel", role: "Traffic Flow Analyst", img: "https://i.pravatar.cc/150?u=aisha" },
  { name: "Officer Carlos Morales", role: "Night Shift Coordinator", img: "https://i.pravatar.cc/150?u=carlos" },
]

export default function HSPUPage() {
  const [password, setPassword] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState(false)
  const [showGranted, setShowGranted] = useState(false)
  const [filter, setFilter] = useState<'all' | 'hspu' | 'mbu'>('all')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === HSPU_PASSWORD) {
      setShowGranted(true)
      setTimeout(() => {
        setShowGranted(false)
        setIsUnlocked(true)
      }, 3000)
    } else {
      setError(true)
      setTimeout(() => setError(false), 2500)
      setPassword('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSubmit(e as any)
  }

  const filteredMembers = filter === 'all'
    ? [...hspuMembers, ...mbuMembers]
    : filter === 'hspu'
    ? hspuMembers
    : mbuMembers

  if (showGranted) {
    return (
      <div className="fixed inset-0 bg-[rgba(16,185,129,0.95)] backdrop-blur-[10px] flex flex-col items-center justify-center z-[99999] text-white text-center">
        <div className="text-[3.5rem] font-black animate-[granted_3s_ease-out_forwards]">ACCESS GRANTED</div>
        <p className="text-[1.6rem] mt-4 text-[#e0f7e9] animate-fadeIn" style={{animationDelay: '1s', animationFillMode: 'both'}}>Secure Zone Unlocked</p>
      </div>
    )
  }

  if (!isUnlocked) {
    return (
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.98)] flex flex-col items-center justify-center z-[9999] p-8">
        <svg className="w-40 h-40 mb-6 animate-[logoPulse_2s_ease-in-out_infinite]" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="85" fill="none" stroke="#10B981" strokeWidth="4"/>
          <path d="M75 100 L95 75 L115 100 L95 125 Z" fill="#10B981"/>
          <circle cx="100" cy="100" r="55" fill="none" stroke="#3B82F6" strokeWidth="3" strokeDasharray="8,8"/>
          <text x="100" y="160" textAnchor="middle" fill="#10B981" fontSize="24" fontWeight="bold">HSPU</text>
        </svg>
        <div className="bg-[linear-gradient(135deg,#111,#0A0A0A)] p-8 rounded-[1.9rem] w-full max-w-[440px] border border-[#333] shadow-[0_0_70px_rgba(16,185,129,0.35)] text-center animate-[boxFloat_3s_ease-in-out_infinite]">
          <h2 className="text-[#10B981] text-[2.1rem] mb-2 animate-[glow_2s_ease-in-out_infinite_alternate]">HSPU & MBU DIVISION</h2>
          <p className="text-gray-400 mb-4">Restricted Access • Enter Secure Code</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter Code"
            className="w-full p-4 bg-[#222] border border-[#444] text-white rounded-[1.1rem] text-[1.15rem] mb-4 focus:border-[#10B981] focus:shadow-[0_0_0_5px_rgba(16,185,129,0.35)] focus:bg-[#2a2a2a] focus:scale-[1.02] transition-all outline-none"
            autoFocus
          />
          <button
            onClick={handleSubmit}
            className="w-full px-6 py-3 bg-[#10B981] hover:bg-[#059669] text-white rounded-[1.1rem] font-bold transition-all relative overflow-hidden"
          >
            ENTER SECURE ZONE
          </button>
          <p className={`text-[#EF4444] text-sm mt-4 transition-opacity ${error ? 'opacity-100 animate-shake' : 'opacity-0'}`}>
            Wrong Code! Try Again.
          </p>
        </div>
        <style jsx>{`
          @keyframes logoPulse {
            0%, 100% { transform: scale(1); filter: drop-shadow(0 0 22px rgba(16, 185, 129, 0.75)); }
            50% { transform: scale(1.08); filter: drop-shadow(0 0 40px rgba(16, 185, 129, 1)); }
          }
          @keyframes boxFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes glow {
            from { text-shadow: 0 0 16px rgba(16, 185, 129, 0.7); }
            to { text-shadow: 0 0 25px rgba(16, 185, 129, 1); }
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }
          @keyframes granted {
            0% { opacity: 0; transform: scale(0.7); }
            20% { opacity: 1; transform: scale(1.1); }
            80% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0.9); }
          }
        `}</style>
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
            <span className="text-xs font-orbitron text-[#10B981]">HSPU & MBU // RESTRICTED</span>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center bg-[linear-gradient(rgba(0,0,0,0.78),rgba(0,0,0,0.92)),url('https://i.ibb.co/5Xk9ggBj/New-Project-4.png')] bg-center bg-cover text-center relative">
          <div className="container mx-auto px-4">
            <h1 className="text-7xl font-black mb-4">
              <span className="text-[#10B981]">HSPU</span> & <span className="text-[#3B82F6]">MBU</span>
            </h1>
            <p className="text-[1.75rem] text-[#e5e5e5] mb-12">High Speed Pursuit • Motorbike Unit</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => setFilter('all')} className="px-8 py-3 bg-[#10B981] hover:bg-[#059669] text-white rounded-xl font-bold uppercase tracking-wider transition-all hover:-translate-y-1 hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.6)]">
                All Members
              </button>
              <button onClick={() => setFilter('hspu')} className="px-8 py-3 bg-[#10B981] hover:bg-[#059669] text-white rounded-xl font-bold uppercase tracking-wider transition-all hover:-translate-y-1 hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.6)]">
                HSPU Only
              </button>
              <button onClick={() => setFilter('mbu')} className="px-8 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-xl font-bold uppercase tracking-wider transition-all hover:-translate-y-1 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                MBU Only
              </button>
            </div>
          </div>
        </section>

        {/* Members */}
        <section className="py-20 bg-[#0F0F0F]">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-16 text-[#10B981]">
              {filter === 'hspu' ? 'HSPU MEMBERS' : filter === 'mbu' ? 'MBU MEMBERS' : 'ALL MEMBERS'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredMembers.map((member, i) => (
                <div key={i} className={`bg-[#111] p-8 rounded-[1.3rem] text-center border-2 transition-all hover:-translate-y-3 hover:scale-103 shadow-lg ${filter === 'mbu' || (filter === 'all' && i >= 6) ? 'border-[#3B82F6] hover:border-white' : 'border-[#10B981] hover:border-white'}`} data-scroll style={{animationDelay: `${i * 0.1}s`}}>
                  <div className={`w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 ${filter === 'mbu' || (filter === 'all' && i >= 6) ? 'border-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.4)]' : 'border-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.4)]'} transition-all hover:scale-110`}>
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${filter === 'mbu' || (filter === 'all' && i >= 6) ? 'text-[#3B82F6]' : 'text-[#10B981]'}`}>{member.name}</h3>
                  <p className="text-[#9CA3AF]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Files & Documents */}
        <section className="py-20 bg-[#0A0A0A] text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-[#FBBF24] mb-12 animate-[glowYellow_2s_ease-in-out_infinite_alternate]">FILES & DOCUMENTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { title: "HSPU & MBU SOP", desc: "Standard Operating Procedures", icon: "ri-file-text-line" },
                { title: "Training Manual", desc: "Pursuit & Motorbike Tactics", icon: "ri-book-line" },
                { title: "Current Roster", desc: "Active Members List", icon: "ri-file-list-line" },
                { title: "Vehicle Specs", desc: "Dodge Charger & BMW R1250", icon: "ri-car-line" },
              ].map((file, i) => (
                <div key={i} className="bg-[#111] p-6 rounded-[1.3rem] border border-[#333] hover:border-[#FBBF24] hover:-translate-y-2 hover:scale-105 hover:bg-[#1a1a1a] transition-all shadow-lg" data-scroll style={{animationDelay: `${i * 0.15}s`}}>
                  <i className={`${file.icon} text-5xl text-[#FBBF24] mb-4 block`}></i>
                  <h3 className="text-lg font-bold mb-2">{file.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{file.desc}</p>
                  <a href="#" onClick={(e) => { e.preventDefault(); alert(`${file.title} downloaded!`); }} className="inline-block px-6 py-2 bg-[#FBBF24] hover:bg-[#f59e0b] text-black rounded-lg font-bold transition-all hover:-translate-y-1 shadow-[0_4px_12px_rgba(251,191,36,0.4)]">
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-[#0a0a0a] text-center text-[#777] text-sm border-t border-[#222]">
        <p>© 2025 Secret Roleplay - UPD. All rights reserved.</p>
        <p className="mt-2">Template by <a href="#" className="text-[#FBBF24] hover:text-[#FCD34D] font-bold">FourTwentyDevs - CLB Designs</a></p>
      </footer>

      <style jsx global>{`
        @keyframes glowYellow {
          from { text-shadow: 0 0 20px rgba(251, 191, 36, 0.6); }
          to { text-shadow: 0 0 35px rgba(251, 191, 36, 1); }
        }
      `}</style>
    </>
  )
}
