import { Link } from "react-router-dom";
import EditProductForm from "./EditProductForm";

function ProductCard({ product, onEdit, editingProduct, setProducts, onDelete }) {
    const isEditing = editingProduct?.id === product.id;

    return (
        <div className="group overflow-hidden mt-3 rounded-2xl border border-white/10 bg-[#202337] transition duration-300 hover:-translate-y-1 hover:border-indigo-500/50">
            
            {isEditing ? (
                <EditProductForm
                    product={product}
                    onCancel={() => onEdit(null)}
                    setProducts={setProducts}
                />
            ) : (
                <>
                    {/* Product Image */}
                    <Link to={`/products/${product.id}`}>
                        <div className="flex h-56 items-center justify-center bg-white p-5">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                            />
                        </div>
                    </Link>

                    {/* Product Information */}
                    <div className="p-5">

                        <p className="mb-2 text-xs font-medium capitalize text-indigo-400">
                            {product.category}
                        </p>

                        <h3 className="mb-3 line-clamp-2 min-h-12 font-semibold text-white">
                            {product.title}
                        </h3>

                        <div className="flex items-center justify-between gap-2">
                            <p className="font-bold text-white">
                                ${product.price}
                            </p>  
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => onEdit(isEditing ? null : product)}
                                className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-500"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => onDelete(product.id)}
                                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500"
                            >
                                Delete
                            </button>
                            <Link
                                to={`/products/${product.id}`}
                                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
                            >
                                Details →
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ProductCard;