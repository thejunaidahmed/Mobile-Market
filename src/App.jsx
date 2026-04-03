import { Routes, Route } from "react-router-dom"
import Footer from "./Pages/Footer/Footer"
import Home from "./Pages/Home/Home"
import Nav from "./Pages/Nav/Nav"
import Shop from "./Pages/Shop/Shop"
import Cart from "./Pages/Cart/Cart"
import Contact from "./Pages/Contact/Contact"
import Specification from "./Pages/Specification/Specification"


function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/specification" element={<Specification/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
