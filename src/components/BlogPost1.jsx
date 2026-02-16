import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import './BlogPost.css'

function BlogPost1() {
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
            <span className="blog-post-category">Ümumi</span>
            <h1 className="blog-post-title">Səs izolyasiyası nə üçündür?</h1>
            <div className="blog-post-body">
              <p>
                Səs izolyasiyası müasir yaşayış və iş məkanlarının vacib bir komponentidir. 
                Bu texnologiya məkanınızda səs keçiriciliyini azaldır və rahatlıq yaradır.
              </p>
              <h2>Əsas məqsədlər</h2>
              <ul>
                <li><strong>Qonşu səsi idarə etmə:</strong> Mənzillərdə qonşulardan gələn səsləri azaltmaq</li>
                <li><strong>Küçə səs-küyünü bloklamaq:</strong> Xarici səs-küyün daxili məkanı pozmasının qarşısını almaq</li>
                <li><strong>Daxili səsləri idarə etmə:</strong> Otaqlar arasında səs keçiriciliyini azaltmaq</li>
                <li><strong>Məxfilik təmin etmə:</strong> Şəxsi və iş görüşlərində məxfilik yaratmaq</li>
              </ul>
              <h2>Nə vaxt lazımdır?</h2>
              <p>
                Səs izolyasiyası xüsusilə çoxmənzilli binalarda, səs-küylü məhəllələrdə və 
                peşəkar audio keyfiyyəti tələb olunan məkanlarda vacibdir. Yeni tikililərdə 
                və renovasiya zamanı səs izolyasiyasına diqqət yetirmək məkanın dəyərini və 
                yaşayış keyfiyyətini artırır.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default BlogPost1
