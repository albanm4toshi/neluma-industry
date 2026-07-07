import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './components/LanguageContext'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import ImosPage from './components/ImosPage'
import PrivacyPolicy from './components/PrivacyPolicy'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'
import './App.css'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <LanguageProvider>
      {showSplash && <SplashScreen onDone={() => setShowSplash(false)} />}
      <BrowserRouter>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/imos-ix" element={<ImosPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}