import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/home'
import SobreNos from './pages/SobreNos'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App