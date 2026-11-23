import ProductCard from "./ProductCard";


function ProductList({products, onEdit, editingProduct, setProducts, onDelete}){
  return(
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onEdit={onEdit}
          editingProduct={editingProduct}
          setProducts={setProducts}
          onDelete={onDelete}
      />
      ))}
    </div>
  )
} 

export default ProductList;