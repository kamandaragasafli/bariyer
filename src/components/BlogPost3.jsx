import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import './BlogPost.css'

function BlogPost3() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
    setTimeout(() => {
      const blogSection = document.getElementById('blog')
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div className="App">
      <Navbar />
      <main role="main" id="main-content">
        <article className="blog-post">
          <button onClick={handleBack} className="blog-back-button">← Geri</button>
          <div className="blog-post-content">
            <span className="blog-post-category">Hədəf auditoriya</span>
            <h1 className="blog-post-title">Kim üçün lazımdır?</h1>
            <div className="blog-post-body">
              <p>
                Səs izolyasiyası müxtəlif məkanlar və auditoriyalar üçün vacibdir. 
                Hər bir məkanın özünəməxsus ehtiyacları var və fərdi həllər tələb olunur.
              </p>
              <h2>Yaşayış məkanları</h2>
              <ul>
                <li><strong>Mənzil sahibləri:</strong> Qonşu səsi və küçə səs-küyündən qorunmaq istəyənlər</li>
                <li><strong>Ev sahibləri:</strong> Ailə üzvləri arasında səs izolyasiyası tələb edənlər</li>
                <li><strong>Villa sahibləri:</strong> Daha geniş məkanlarda akustik rahatlıq istəyənlər</li>
              </ul>
              <h2>Kommersiya məkanları</h2>
              <ul>
                <li><strong>Restoranlar:</strong> Müştəri təcrübəsini yaxşılaşdırmaq və işçilər üçün rahat mühit</li>
                <li><strong>Karaoke otaqları:</strong> Səs-küyün xarici məkanlara keçməsinin qarşısını almaq</li>
                <li><strong>Ofislər:</strong> İşçi məhsuldarlığını artırmaq və konfidensiallıq təmin etmək</li>
              </ul>
              <h2>Peşəkar məkanlar</h2>
              <ul>
                <li><strong>Musiqi studioları:</strong> Peşəkar audio keyfiyyəti və səs idarəetməsi</li>
                <li><strong>Sinema zalları:</strong> İdeal akustik mühit və səs-küyün bloklanması</li>
                <li><strong>Podcast studioları:</strong> Yüksək keyfiyyətli audio üçün akustik izolyasiya</li>
                <li><strong>Voice-over studioları:</strong> Xarici səs-küydən azad peşəkar mühit</li>
              </ul>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default BlogPost3
