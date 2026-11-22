import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    image: "/NovaAIStarterKit.jpg",
    title: "Nova AI Starter Kit",
    category: "AI TOOLS",
    price: 129000,
    badge: "Terlaris",
    number: "01",
  },
  {
    id: 2,
    image: "/MidnightUISystem.jpg",
    title: "Midnight UI System",
    category: "UI KIT",
    price: 189000,
    badge: "Baru",
    number: "02",
  },
  {
    id: 3,
    image: "/FluxPresentation.jpg",
    title: "Flux Presentation",
    category: "Template",
    price: 89000,
    number: "03",
  },
  {
    id: 4,
    image: "/OrbitSocialPack.jpg",
    title: "Orbit Social Pack",
    category: "Template",
    price: 79000,
    number: "04",
  },
  {
    id: 5,
    image: "/NeonIconLibrary.jpg",
    title: "Neon Icon Library",
    category: "ASSETS",
    price: 99000,
    badge: "Pilihan",
    number: "05",
  },
  {
    id: 6,
    image: "/FutureWebBlocks.jpg",
    title: "Future Web Blocks",
    category: "UI KIT",
    price: 159000,
    number: "06",
  },
];

export default function ProductList({
  searchTerm,
  selectedCategory,
  onAddToCart
}) {
  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "Semua" ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();

    const matchSearch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <div
      id="products"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
            badge={product.badge}
            number={product.number}
            onAddToCart={()=> onAddToCart(product)}
          />
        ))
      ) : (
        <p className="col-span-full py-10 text-center text-gray-400">
          Produk tidak ditemukan.
        </p>
      )}
    </div>
  );
}