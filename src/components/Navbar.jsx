import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (hash) => {
    setMenuOpen(false)
    if (window.location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button
          type="button"
          className="navbar-toggle"
          aria-label="Menyunu aç"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
          <span className="navbar-toggle-bar" />
        </button>
        <div className={`navbar-links ${menuOpen ? 'navbar-links-open' : ''}`}>
          <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services') }}>Xidmətlər</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); handleNavClick('#projects') }}>Layihələr</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('#about') }}>Haqqımızda</a>
          <a href="#blog" onClick={(e) => { e.preventDefault(); handleNavClick('#blog') }}>Blog</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}>Əlaqə</a>
        </div>
        <Link to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
          <span className="navbar-brand-title">BARİYER PM</span>
          <span className="navbar-brand-tagline">
            <span className="navbar-brand-line" />
            <span>--SOUND INSULATION--</span>
            <span className="navbar-brand-line" />
          </span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
