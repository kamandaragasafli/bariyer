import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import BlogPost1 from './components/BlogPost1'
import BlogPost2 from './components/BlogPost2'
import BlogPost3 from './components/BlogPost3'
import BlogPost4 from './components/BlogPost4'
import BlogPost5 from './components/BlogPost5'
import BlogPost6 from './components/BlogPost6'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/1" element={<BlogPost1 />} />
        <Route path="/blog/2" element={<BlogPost2 />} />
        <Route path="/blog/3" element={<BlogPost3 />} />
        <Route path="/blog/4" element={<BlogPost4 />} />
        <Route path="/blog/5" element={<BlogPost5 />} />
        <Route path="/blog/6" element={<BlogPost6 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
