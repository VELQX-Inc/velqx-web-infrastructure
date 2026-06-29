import { useState, useEffect, useRef } from 'react'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  decimals?: number
}

export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2500,
  decimals = 0,
}: AnimatedCounterProps) {
  const [current, setCurrent] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = performance.now()

          const easeOutExpo = (t: number): number => {
            return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
          }

          const animate = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easedProgress = easeOutExpo(progress)
            setCurrent(easedProgress * target)

            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setCurrent(target)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target, duration, hasAnimated])

  const formatNumber = (num: number): string => {
    if (decimals > 0) {
      return num.toFixed(decimals)
    }
    return Math.round(num).toLocaleString()
  }

  return (
    <span ref={ref}>
      {prefix}
      {formatNumber(current)}
      {suffix}
    </span>
  )
}
