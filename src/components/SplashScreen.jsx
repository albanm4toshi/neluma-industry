import { useEffect, useState } from 'react'
import './SplashScreen.css'

export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('visible') // visible → fadeout

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('fadeout'), 2000)
    const t2 = setTimeout(() => onDone(), 2800)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  return (
    <div className={`splash ${phase === 'fadeout' ? 'splash--fadeout' : ''}`}>
      <div className="splash__content">
        <img src="/logo.png" alt="Neluma Industry" className="splash__logo" />
        <p className="splash__name">Neluma Industry</p>
      </div>
    </div>
  )
}
