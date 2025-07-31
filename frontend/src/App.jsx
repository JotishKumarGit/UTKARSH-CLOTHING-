import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Footer from './components/Header/Footer';
import Home from './pages/Home';
import SignUp from './components/Login/SignUp';
import Login from './components/Login/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import ServicesM from './pages/MOrePro/ServicesM';
import Products from './pages/MOrePro/Products';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path='/products' element={<Products />} />
        {/* <Route path='/services' element={<ServicesM />} /> */}
        <Route path='/services' element={<ServicesM />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;


