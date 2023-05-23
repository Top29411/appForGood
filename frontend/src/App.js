import React from 'react' ;
import './App.css' ;
import { Routes, Route } from 'react-router-dom' ;
import Navbar from './Components/Navbar' ;
import Signin from './Pages/Auth/Signin' ;
import Signup from './Pages/Auth/Signup' ;
import Products from './Pages/Products' ;
import Container from './Components/Container' ;
import ProductDetail from './Pages/ProductDetail' ;
import Footer from './Pages/Footer' ;
import Toast from './Components/Toast' ;

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Toast/>
      <Container>
        <Routes>
          <Route path="/" exact element={<Products />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  )
}

export default App