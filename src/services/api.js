const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getData(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("Request API gagal");
  }

  return response.json();
}

export async function postData(endpoint, data){
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
        throw new Error("Request API gagal");
  }

  return response.json();
}

export async function putData(endpoint, data) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error("Gagal memperbarui data produk");
    }

    return response.json();
}

export async function deleteData(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Gagal menghapus data produk");
    }

    return response.json();
}