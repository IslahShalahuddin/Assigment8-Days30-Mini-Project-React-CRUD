import { getData } from "./api";

export function getProducts() {
    return getData("/products");
}

export function getCategories(){
    return getData("/products/categories")
}

export function getProductById(id) {
    return getData(`/products/${id}`);
}