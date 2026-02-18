import { useState } from 'react'
import './Hero.css'

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <section className="hero" aria-label="Əsas səhifə">
      <nav className="hero-nav" aria-label="Əsas menyu">
        <button
          type="button"
          className="hero-toggle"
          aria-label="Menyunu aç"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hero-toggle-bar" />
          <span className="hero-toggle-bar" />
          <span className="hero-toggle-bar" />
        </button>
        <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          <a href="#services" onClick={closeMenu}>Xidmətlər</a>
          <a href="#projects" onClick={closeMenu}>Layihələr</a>
          <a href="#about" onClick={closeMenu}>Haqqımızda</a>
          <a href="#blog" onClick={closeMenu}>Blog</a>
          <a href="#contact" onClick={closeMenu}>Əlaqə</a>
        </div>
        <div className="hero-brand">
          <span className="hero-brand-title">BARİYER PM</span>
          <span className="hero-brand-tagline">
            <span className="hero-brand-line" />
            <span>SOUND INSULATION</span>
            <span className="hero-brand-line" />
          </span>
        </div>
      </nav>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-line">SƏSİN NƏZARƏTİ</span>
            <span className="hero-title-gradient">SİZİN ƏLİNİZDƏ!</span>
          </h1>
          <p className="hero-subtitle">
            BARİYER PM ilə səs indi istədiyiniz kimi yankılanır.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
