import { type ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function ScrollReveal({ children, delay = 0, className = '' }: ScrollRevealProps) {
  const delayClass = delay > 0 ? `reveal-delay-${Math.min(delay, 5)}` : ''

  return (
    <div className={`reveal ${delayClass} ${className}`}>
      {children}
    </div>
  )
}
