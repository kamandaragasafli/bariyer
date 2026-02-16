import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import './BlogPost.css'

function BlogPost5() {
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
            <span className="blog-post-category">Peşəkar</span>
            <h1 className="blog-post-title">Studio və sinema zalları üçün</h1>
            <div className="blog-post-body">
              <p>
                Peşəkar audio keyfiyyəti tələb olunan məkanlar üçün səs izolyasiyası və akustik 
                optimallaşdırma vacibdir. Studiolar və sinema zalları üçün xüsusi həllər tələb olunur.
              </p>
              <h2>Musiqi studioları</h2>
              <p>
                Musiqi studiolarında səs izolyasiyası iki əsas məqsədə xidmət edir:
              </p>
              <ul>
                <li><strong>Xarici səs-küyün bloklanması:</strong> Küçə səs-küyü və digər xarici səslərin studiyaya daxil olmasının qarşısını almaq</li>
                <li><strong>Daxili səsin idarə edilməsi:</strong> Studiyada yaranan səsin xarici məkanlara keçməsinin qarşısını almaq</li>
              </ul>
              <h2>Sinema zalları</h2>
              <p>
                Sinema zallarında akustik dizayn və səs izolyasiyası kino təcrübəsinin keyfiyyətini 
                müəyyən edir. Əsas tələblər:
              </p>
              <ul>
                <li><strong>Yankının azaldılması:</strong> Səsin düzgün yayılması və yankının minimuma endirilməsi</li>
                <li><strong>Xarici səs-küyün bloklanması:</strong> Zalın xarici məkanlardan təcrid olunması</li>
                <li><strong>Akustik panellər:</strong> Səsin keyfiyyətli yayılması üçün xüsusi akustik həllər</li>
              </ul>
              <h2>Podcast və voice-over studioları</h2>
              <p>
                Podcast və voice-over studioları üçün səs izolyasiyası xüsusilə vacibdir, çünki 
                burada ən kiçik xarici səs-küy belə audio keyfiyyətini pozur. Xüsusi akustik panellər 
                və izolyasiya materialları istifadə olunur.
              </p>
              <h2>Texniki tələblər</h2>
              <p>
                Peşəkar məkanlar üçün səs izolyasiyası yüksək texniki standartlar tələb edir. 
                Materialların seçimi, quraşdırılması və akustik testlər peşəkar komanda tərəfindən 
                həyata keçirilməlidir.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default BlogPost5
