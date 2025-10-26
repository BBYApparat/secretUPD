'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ScrollAnimations() {
  useEffect(() => {
    // Animate scroll elements
    const scrollElements = document.querySelectorAll('[data-scroll]')
    scrollElements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
        },
        y: 10,
        opacity: 0,
        duration: 0.4,
        ease: 'power1.out',
      })
    })

    // Animate text elements
    const textElements = document.querySelectorAll('.typing-text, .clean-text')
    textElements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
        },
        y: 10,
        opacity: 0,
        duration: 0.4,
        ease: 'power1.out',
      })
    })

    // Section children stagger animation
    document.querySelectorAll('section').forEach((section) => {
      gsap.from(section.children, {
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
        },
        y: 10,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power1.out',
      })
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return null
}
