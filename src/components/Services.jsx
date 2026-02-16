import { useState, useEffect, useRef } from 'react'
import './Services.css'

const galleryImages = [
  {
    src: '/room/home.jpg',
    alt: 'Mənzildə səs izolyasiyası — BARIYER PM',
    title: 'Mənzil Səs İzolyasiyası',
    description: 'Qonşu səsi, tavan döyüntüsü və küçə səs-küyünün azaldılması. Yaşayış məkanınızda rahat və səssiz mühit.'
  },
  {
    src: '/room/restaurant.jpg',
    alt: 'Restoranda akustik həll — BARIYER PM',
    title: 'Restoran Akustikası',
    description: 'Yankının azaldılması və rahat söhbət mühiti. Müştərilər üçün keyfiyyətli səs balansı.'
  },
  {
    src: '/room/sinema.jpg',
    alt: 'Sinema zalında akustik izolyasiya — BARIYER PM',
    title: 'Sinema Zalı',
    description: 'Kino təcrübəsi üçün ideal akustik mühit. Səsin keyfiyyətli yayılması və xarici səs-küydən təcrid.'
  },
  {
    src: '/room/studio.jpg',
    alt: 'Səs yazısı studiyası — BARIYER PM',
    title: 'Studio Yığılması',
    description: 'Musiqi, voice-over və podcast studioları üçün peşəkar səs izolyasiyası və akustik optimallaşdırma.'
  }
]

const fallbackSrc = '/room/home.jpg'

function Services() {
  const [isInView, setIsInView] = useState(false)
  const galleryRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true)
      },
      { threshold: 0.15 }
    )
    if (galleryRef.current) observer.observe(galleryRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Xidmətlərimiz</h2>
          <p>Hər layihə üçün fərdi həllər</p>
        </div>
        <div ref={galleryRef} className={`room-gallery ${isInView ? 'in-view' : ''}`}>
          {galleryImages.map((item, i) => (
            <div key={i} className="room-card">
              <img 
                src={item.src} 
                alt={item.alt} 
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.target.src = fallbackSrc
                }}
              />
              <div className="room-card-overlay">
                <h3 className="room-card-title">{item.title}</h3>
                <p className="room-card-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
