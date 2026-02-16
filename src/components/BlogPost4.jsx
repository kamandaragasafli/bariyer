import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import './BlogPost.css'

function BlogPost4() {
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
            <span className="blog-post-category">Mənzil</span>
            <h1 className="blog-post-title">Mənzildə səs izolyasiyası</h1>
            <div className="blog-post-body">
              <p>
                Mənzillərdə səs izolyasiyası xüsusilə vacibdir, çünki qonşu səsi və tavan döyüntüsü 
                yaşayış keyfiyyətini əhəmiyyətli dərəcədə azalda bilər. Düzgün planlaşdırılmış səs 
                izolyasiyası bu problemləri həll edir.
              </p>
              <h2>Əsas problemlər</h2>
              <ul>
                <li><strong>Qonşu səsi:</strong> Yan və üst-alt otaqlardan gələn səslər</li>
                <li><strong>Tavan döyüntüsü:</strong> Üst mənzildən gələn addım və hərəkət səsləri</li>
                <li><strong>Döşəmə səsi:</strong> Aşağı mənzilə keçən addım və mebel səsləri</li>
                <li><strong>Divar səsi:</strong> Yan otaqlardan gələn səslər</li>
              </ul>
              <h2>Həll yolları</h2>
              <h3>Tavan izolyasiyası</h3>
              <p>
                Tavan döyüntüsünü azaltmaq üçün akustik panellər və səs izolyasiya materialları 
                istifadə olunur. Bu, üst mənzildən gələn səsləri əhəmiyyətli dərəcədə azaldır.
              </p>
              <h3>Döşəmə izolyasiyası</h3>
              <p>
                Döşəmə altına xüsusi izolyasiya materialları qoyulur və üzərinə akustik döşəmə 
                örtükləri əlavə olunur. Bu, aşağı mənzilə səs keçməsinin qarşısını alır.
              </p>
              <h3>Divar izolyasiyası</h3>
              <p>
                Divarlara akustik panellər və izolyasiya materialları quraşdırılır. Bu, yan otaqlardan 
                gələn səsləri azaldır və məxfilik təmin edir.
              </p>
              <h2>Materiallar</h2>
              <p>
                Mənzillərdə əsasən mineral yun, akustik panellər, səs izolyasiya membranları və 
                xüsusi döşəmə örtükləri istifadə olunur. Materialların seçimi məkanın xüsusiyyətlərinə 
                və büdcəyə görə müəyyən edilir.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default BlogPost4
