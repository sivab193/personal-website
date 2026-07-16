"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

// Wraps any card in a subtle pointer-driven 3D tilt. No-op on touch / reduced
// motion. Keep the tilt gentle here — the project cards carry the loud 3D.
export function TiltCard({
  children,
  className = "",
  max = 6,
}: {
  children: ReactNode
  className?: string
  max?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [interactive, setInteractive] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const canHover = window.matchMedia("(hover: hover)").matches
    const wide = window.matchMedia("(min-width: 768px)").matches
    setInteractive(canHover && wide && !reduce)
  }, [])

  function onMove(e: React.MouseEvent) {
    const el = ref.current
    if (!interactive || !el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    el.style.setProperty("--rx", `${(0.5 - py) * max}deg`)
    el.style.setProperty("--ry", `${(px - 0.5) * max}deg`)
  }
  function onLeave() {
    const el = ref.current
    if (!el) return
    el.style.setProperty("--rx", "0deg")
    el.style.setProperty("--ry", "0deg")
  }

  return (
    <div ref={ref} className={`tilt3d ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  )
}
