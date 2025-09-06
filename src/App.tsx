import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav'
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar />
      <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />   
    </>
  )
}

export default App
