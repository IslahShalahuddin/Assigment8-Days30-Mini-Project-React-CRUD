import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import CardCategory from './components/Card'
import ProductList from './components/ProductList'
import CartSummary from './components/CartSummary'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("")

  // Mengambil keranjang yg sebelumnya tersimpan
  const [cart, setCart]= useState(() => {
    const savedCart = localStorage.getItem("dibitech-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Menympan keranjang setiap kali ada perubahan
  useEffect(() => {
    localStorage.setItem("dibitech-cart", JSON.stringify(cart));
  }, [cart]);

  // Menambahkan produk kekeranjang
  function handleAddCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find((item) => item.id === product.id
    );

    if (existingProduct){
      return currentCart.map((item) => 
      item.id === product.id ? {...item, quantity: item.quantity + 1}
      : item);
    }

    return [...currentCart, {...product, quantity: 1}]
    });
  }

  // Menghapus Produk
  function handleRemovedFromCart(productId){
    setCart((currentCart) => 
    currentCart.filter((item) => item.id !== productId)
    );
  }

  // Menghitung Total jumlah
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity, 0
  );
  return (
      <div className="min-h-screen w-full bg-[#070b17] bg-[radial-gradient(ellipse_at_50%_25%,#101e4b_0%,#09122b_45%,#050916_85%)] px-4 font-sans text-white sm:px-6 lg:px-10">
        <Navbar cartCount={cartCount}/>
        <Hero />
        
        <Category 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <CardCategory 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <ProductList 
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          onAddToCart={handleAddCart}
        />

        <CartSummary
          cart={cart}
          onRemove={handleRemovedFromCart}
        />

        <Footer />
      </div>
  )
}

export default App
