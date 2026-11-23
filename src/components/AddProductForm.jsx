import { useState } from "react";
import { createProduct } from "../services/productService";

function AddProductForm({ categories, setProducts, }) {
    // State Form Data
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        image: ""
    });

    async function handleSubmit(e) {
        e.preventDefault();

        console.log("1. HANDLE SUBMIT TERPANGGIL")
        const newProduct = {
            ...formData,
            price: Number(formData.price)
        };

        console.log("2. DATA YANG DIKIRIM:", newProduct);

        try {
        const response = await createProduct(newProduct);

        console.log("3. POST BERHASIL: Product berhasil ditambahkan:", response);

        setProducts((prevProducts) => [
            response,
            ...prevProducts
        ])

        } catch (error) {
            console.error("4. POST GAGAL:Gagal menambahkan product:", error);
        }
    }

    return (
        <div className="mb-8 rounded-xl bg-[#20263B] p-6">

            <h3 className="mb-5 text-xl font-bold">
                Add New Product
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <label>Product Name</label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                title: e.target.value
                            })
                        }
                        placeholder="Enter product name"
                        className="mt-2 w-full rounded-lg bg-[#121421] p-3"
                    />
                </div>

                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        value={formData.price}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                price: e.target.value
                            })
                        }
                        placeholder="Enter product price"
                        className="mt-2 w-full rounded-lg bg-[#121421] p-3"
                    />
                </div>

                <div>
                    <label>Description</label>
                    <textarea
                        value={formData.description}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                description: e.target.value
                            })
                        }
                        placeholder="Enter product description"
                        className="mt-2 w-full rounded-lg bg-[#121421] p-3"
                    />
                </div>

                <div>
                    <label>Category</label>
                    <select 
                        value={formData.category}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                category: e.target.value
                            })
                        }
                        className="mt-2 w-full rounded-lg bg-[#121421] p-3"
                    >   
                        <option value="">Select Category</option>

                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label>Image URL</label>
                    <input
                        type="text"
                        value={formData.image}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                image: e.target.value
                            })
                        }
                        placeholder="Enter image URL"
                        className="mt-2 w-full rounded-lg bg-[#121421] p-3"
                    />
                </div>

                <button
                    type="submit"
                    className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-500"
                >
                    Save Product
                </button>

            </form>
        </div>
    );
}

export default AddProductForm;
