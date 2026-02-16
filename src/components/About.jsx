import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>Haqqımızda</h2>
          <p className="about-tagline">Səsə nəzarət, rahat məkan</p>
        </div>
        <div className="about-content">
          <p className="about-text">
            BARIYER PM Azərbaycanda peşəkar səs və akustik izolyasiya həlləri təqdim edir. Mənzillərdən sinema zalları, studiolar, restoran və karaoke otaqlarına qədər hər layihədə fərdi yanaşma və keyfiyyətli materiallarla işləyirik.
          </p>
          <p className="about-text">
            Məqsədimiz sizin məkanınızda optimal səs izolyasiyası və akustik mühit yaratmaqdır. Keşif, layihələndirmə, material təchizatı və montajı öz əlimizdə həyata keçiririk.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-item stat-item-first">
            <span className="stat-number">50+</span>
            <span className="stat-label">Layihə</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">İl təcrübə</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Müştəri məmnuniyyəti</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
