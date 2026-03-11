import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import MenuCaffetteria from './pages/MenuCaffetteria'
import MenuBevande from './pages/MenuBevande'
import MenuPranzi from './pages/MenuPranzi'
import ChiSiamo from './pages/ChiSiamo'
import Contatti from './pages/Contatti'
import ScrollToTop from './components/ScrollToTop'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div className="page-transition" key={location.pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu-caffetteria" element={<MenuCaffetteria />} />
        <Route path="/menu-bevande" element={<MenuBevande />} />
        <Route path="/menu-pranzi" element={<MenuPranzi />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  )
}
