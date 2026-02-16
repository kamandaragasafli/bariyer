import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import './BlogPost.css'

function BlogPost2() {
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
            <span className="blog-post-category">Faydalar</span>
            <h1 className="blog-post-title">Səs izolyasiyası nə yarayır?</h1>
            <div className="blog-post-body">
              <p>
                Səs izolyasiyası tətbiq etməklə məkanınızda əhəmiyyətli dəyişikliklər əldə edə bilərsiniz. 
                Bu investisiya həm sağlamlığa, həm də məkanın dəyərinə müsbət təsir göstərir.
              </p>
              <h2>Sağlamlıq faydaları</h2>
              <ul>
                <li><strong>Yuxu keyfiyyətinin yaxşılaşması:</strong> Səs-küydən azad mühit daha yaxşı yuxu təmin edir</li>
                <li><strong>Stressin azalması:</strong> Davamlı səs-küy stress və yorğunluğa səbəb olur</li>
                <li><strong>Diqqətin artması:</strong> Səs-küydən azad mühit konsentrasiyanı artırır</li>
              </ul>
              <h2>İqtisadi faydalar</h2>
              <ul>
                <li><strong>Məkanın dəyərinin artması:</strong> Yaxşı səs izolyasiyası olan məkanlar daha bahalı satılır</li>
                <li><strong>Enerji qənaəti:</strong> Bəzi izolyasiya materialları istilik izolyasiyası da təmin edir</li>
                <li><strong>İş məhsuldarlığının artması:</strong> Ofislərdə daha yaxşı iş mühiti yaradır</li>
              </ul>
              <h2>Məxfilik və rahatlıq</h2>
              <p>
                Səs izolyasiyası məxfilik təmin edir və ailə üzvləri arasında daha rahat yaşayış 
                şəraiti yaradır. Uşaqlar oynaya bilər, böyüklər işləyə və istirahət edə bilər.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default BlogPost2
