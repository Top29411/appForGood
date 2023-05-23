import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AuthProvider } from './Context/AuthContext'
import { ProductProvider } from './Context/ProductContext'
import { CrumProvider } from './Context/CrumContext'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <CrumProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
        </CrumProvider>
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

