import { useState } from "react";
import { updateProduct } from "../services/productService";

function EditProductForm({product, onCancel, setProducts}) {
    const [formData, setFormData] = useState({
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const updatedProduct = {
            ...formData,
            price: Number(formData.price)
        };

        try {
            const response = await updateProduct(product.id, updatedProduct);

            console.log("Produk berhasil diperbarui:", response);

            setProducts((prevProducts) =>
                prevProducts.map((item) =>
                    item.id === product.id
                        ? { ...item, ...response }
                        : item
                )
            );

            onCancel();
        } catch (error) {
            console.error("Gagal memperbarui produk:", error);
            }
        }
    
    return (
        <form 
            onSubmit={handleSubmit}
            className="mt-4 rounded-xl bg-[#292e45] p-4">
            <h3 className="mb-4 font-semibold text-white">
                Edit Product
            </h3>

            <div className="space-y-3">
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Product Title"
                    className="w-full rounded-lg p-2"
                />

                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Price"
                    className="w-full rounded-lg p-2"
                />

                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="w-full rounded-lg p-2"
                />

                <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="Category"
                    className="w-full rounded-lg p-2"
                />

                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="w-full rounded-lg p-2"
                />
            </div>
            <div className="mt-4 flex gap-3">
                <button
                    type="button"
                    onClick={onCancel}
                    className="rounded-lg bg-gray-600 px-4 py-2 text-white"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-white"
                >
                    Save Changes
                </button>
            </div>
        </form>
    );
}

export default EditProductForm;