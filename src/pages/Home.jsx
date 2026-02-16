import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="App">
      <main role="main" id="main-content">
        <Hero />
        <Services />
        <About />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}

export default Home
