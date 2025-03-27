'use client'

import Lenis from 'lenis'
import { ReactNode, useEffect } from 'react'

interface SmoothScrollProviderProps {
  children: ReactNode
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
