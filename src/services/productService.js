import { getData, postData, putData, deleteData } from "./api";

export function getProducts() {
    return getData("/products");
}

export function getCategories(){
    return getData("/products/categories")
}

export function getProductById(id) {
    return getData(`/products/${id}`);
}

export function createProduct(product){
    return postData("/products", product)
}

export function updateProduct(id, product) {
    return putData(`/products/${id}`, product);
}

export function deleteProduct(id) {
    return deleteData(`/products/${id}`);
}