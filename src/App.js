import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Coffe from './pages/Coffe'
import Header from './components/Header'
import Footer from './components/Footer'
import Tea from './pages/Tea'
import Detail from './pages/Detail'
import Cart from './pages/Cart'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coffe" element={<Coffe />} />
        <Route path="/Tea" element={<Tea />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/product-detail/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
