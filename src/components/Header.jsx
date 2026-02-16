import './Header.css'
import Logo from './Logo'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Logo className="dark" />
        <nav className="nav">
          <a href="#services">Xidmətlər</a>
          <a href="#projects">Layihələr</a>
          <a href="#about">Haqqımızda</a>
          <a href="#contact">Əlaqə</a>
        </nav>
        <a 
          href="https://wa.me/994502000549" 
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </header>
  )
}

export default Header
