import { useState, useEffect } from "react";
import { 
    getProducts, 
    getCategories
} from "../services/productService"
import ProductList from "../components/ProductList";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import Pagination from "../components/Pagination";
import CategoryFilter from "../components/CategoryFilter";

function Home(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 8;
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        async function fetchProducts() {
            try {
                const productData = await getProducts();
                const categoryData = await getCategories()
                setProducts(productData);
                setCategories(categoryData)
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);

            }
        }
        fetchProducts();
    }, []);

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    function handleCategoryChange(category){
        setSelectedCategory(category);
        setCurrentPage(1);
    }
    
    // 1. Filter produk berdasarkan kategori
    const filteredProducts = selectedCategory === "all"
        ? products
        : products.filter(
            (product) => product.category === selectedCategory
        );

    // 2. Hitung jumlah halaman berdasarkan hasil filter
    const totalPages = Math.ceil(
        filteredProducts.length / itemPerPage
    );

    // 3. Tentukan indeks produk yang akan ditampilkan
    const indexOfLastProduct = currentPage * itemPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemPerPage;

    // 4. Ambil produk sesuai halaman
    const currentProduct = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );
        
    return (
        <main className="min-h-screen bg-[#121421] px-5 py-10 text-white md:px-10">

            <div className="mx-auto max-w-7xl">

                {/* HERO SECTION */}
                <section className="mb-14 overflow-hidden rounded-3xl bg-gradient-to-r from-[#202B50] via-[#29265A] to-[#402A70] px-7 py-12 md:px-12 md:py-16">

                    <div className="max-w-2xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[3px] text-indigo-300">
                            Welcome to DibiTech
                        </p>

                        <h1 className="text-3xl font-bold leading-tight md:text-5xl">
                            Discover Digital Products for Your Next Big Idea.
                        </h1>

                        <a
                            href="#products"
                            className="mt-7 inline-block rounded-full bg-indigo-500 px-7 py-3 font-semibold transition hover:bg-indigo-400"
                        >
                            Explore Products →
                        </a>
                    </div>

                </section>

                {/* PRODUCT SECTION */}
                <section id="products">

                    <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">

                        <div>
                            <p className="mb-2 text-sm font-medium text-indigo-400">
                                OUR COLLECTION
                            </p>

                            <h2 className="text-2xl font-bold md:text-3xl">
                                Explore Products
                            </h2>

                            <p className="mt-2 text-sm text-gray-400">
                                Find the right products for your needs.
                            </p>
                        </div>

                        <p className="text-sm text-gray-400">
                            Showing {filteredProducts.length} products
                        </p>

                    </div>

                    {/* CATEGORY FILTER */}
                    <div className="mb-8">
                        <CategoryFilter
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onCategoryChange={handleCategoryChange}
                        />
                    </div>

                    {/* PRODUCT LIST */}
                    <ProductList products={currentProduct} />

                    {/* PAGINATION */}
                    <div className="mt-10 flex justify-center">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </div>

                </section>

            </div>
        </main>
    );
}

export default Home;