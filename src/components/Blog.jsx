import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'

const blogPosts = [
  {
    id: 1,
    title: 'Səs izolyasiyası nə üçündür?',
    excerpt: 'Səs izolyasiyası məkanınızda səs keçiriciliyini azaldır və rahatlıq yaradır. Qonşu səsi, küçə səs-küyü və daxili səsləri idarə etməyə kömək edir.',
    category: 'Ümumi'
  },
  {
    id: 2,
    title: 'Səs izolyasiyası nə yarayır?',
    excerpt: 'Səs izolyasiyası yuxu keyfiyyətini yaxşılaşdırır, iş məhsuldarlığını artırır, məxfilik təmin edir və məkanın dəyərini artırır.',
    category: 'Faydalar'
  },
  {
    id: 3,
    title: 'Kim üçün lazımdır?',
    excerpt: 'Mənzil sahibləri, restoranlar, studiolar, sinema zalları, karaoke otaqları və ofislər üçün səs izolyasiyası vacibdir.',
    category: 'Hədəf auditoriya'
  },
  {
    id: 4,
    title: 'Mənzildə səs izolyasiyası',
    excerpt: 'Qonşu səsi, tavan döyüntüsü və döşəmə səsini azaltmaq üçün mənzildə səs izolyasiyası necə həyata keçirilir.',
    category: 'Mənzil'
  },
  {
    id: 5,
    title: 'Studio və sinema zalları üçün',
    excerpt: 'Peşəkar audio keyfiyyəti üçün studiolarda və sinema zallarında akustik izolyasiya və səs idarəetməsi.',
    category: 'Peşəkar'
  },
  {
    id: 6,
    title: 'Restoran və karaoke otaqları',
    excerpt: 'Müştəri təcrübəsini yaxşılaşdırmaq üçün restoran və karaoke otaqlarında akustik həllər və səs izolyasiyası.',
    category: 'Kommersiya'
  }
]

function Blog() {
  const [isInView, setIsInView] = useState(false)
  const blogRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true)
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    if (blogRef.current) observer.observe(blogRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="blog" className="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h2>Blog</h2>
          <p>Səs izolyasiyası haqqında məlumatlar</p>
        </div>
        <div ref={blogRef} className={`blog-grid ${isInView ? 'in-view' : ''}`}>
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <span className="blog-category">{post.category}</span>
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <Link 
                to={`/blog/${post.id}`}
                className="blog-read-more"
              >
                Daha çox oxu →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
