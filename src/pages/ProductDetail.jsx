import { useState, useEffect } from "react";
// Mengambil Parameter dari URL
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function ProductDetail() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchProduct() {
            try {
                const data = await getProductById(id);
                setProduct(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [id]);

        if (loading) {
            return <Loading />;
        }

        if (error) {
            return <ErrorMessage message={error} />;
        }
        if (!product) {
            return <p>Produk tidak ditemukan.</p>;
        }

        return (
        <main className="min-h-screen bg-[#121421] px-5 py-10 md:px-10">
            <div className="mx-auto max-w-6xl">

                {/* Tombol kembali */}
                <Link
                    to="/"
                    className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-indigo-400"
                >
                    ← Kembali ke Produk
                </Link>

                {/* Detail produk */}
                <div className="grid gap-10 rounded-2xl border border-white/10 bg-[#202337] p-6 md:grid-cols-2 md:p-10">

                    {/* Gambar */}
                    <div className="flex min-h-80 items-center justify-center rounded-xl bg-white p-8">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="max-h-96 w-full object-contain"
                        />
                    </div>

                    {/* Informasi */}
                    <div className="flex flex-col justify-center">

                        <p className="mb-3 text-sm font-medium capitalize text-indigo-400">
                            {product.category}
                        </p>

                        <h1 className="mb-5 text-2xl font-bold text-white md:text-3xl">
                            {product.title}
                        </h1>

                        <p className="mb-5 text-2xl font-bold text-indigo-400">
                            ${product.price}
                        </p>

                        <div className="mb-6">
                            <h2 className="mb-2 font-semibold text-white">
                                Deskripsi Produk
                            </h2>

                            <p className="leading-relaxed text-gray-400">
                                {product.description}
                            </p>
                        </div>

                        <div className="border-t border-white/10 pt-5">
                            <p className="text-sm text-gray-400">
                                Rating Produk
                            </p>

                            <p className="mt-2 font-semibold text-yellow-400">
                                ★ {product.rating?.rate} / 5
                                <span className="ml-2 text-sm font-normal text-gray-400">
                                    ({product.rating?.count} ulasan)
                                </span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
export default ProductDetail
