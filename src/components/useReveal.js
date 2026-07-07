import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08 }
    )

    const el = ref.current
    if (el) {
      el.querySelectorAll('.reveal, .reveal-from-left, .reveal-from-right').forEach(el => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  return ref
}