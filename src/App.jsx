import { Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import ProtectedRoute from "./components/Protectedroute"
import Users from "./pages/Users";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route 
          path="/" 
          element={<Home />}
        />

        <Route 
          path="/products/:id"
          element={
              <ProductDetail/>
          }  
        />

        <Route
            path="/login"
            element={<Login />}
        />

        <Route 
          path="/users" 
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>} 
        />
      </Routes>

      <Footer />
    </>
  )
}

export default App
