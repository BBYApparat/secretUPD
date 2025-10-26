'use client'

import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="loading-screen fixed inset-0 bg-linear-black z-50 flex items-center justify-center">
      <div className="loading-content text-center">
        <div className="loading-bar w-32 h-px bg-linear-gray-lighter mx-auto relative overflow-hidden">
          <div className="loading-progress absolute top-0 left-0 h-full w-full bg-linear-accent transform -translate-x-full"></div>
        </div>
      </div>
    </div>
  )
}
