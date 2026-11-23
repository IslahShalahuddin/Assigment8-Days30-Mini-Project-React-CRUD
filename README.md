# DibiTech Marketplace – React Mini Project

Aplikasi marketplace sederhana berbasis React yang menampilkan produk dari Fake Store API. Project ini dibuat sebagai bagian dari **Mini Project React – Full Stack Web Development Bootcamp Dibimbing**.

## 1. Project Overview

DibiTech Marketplace merupakan aplikasi frontend yang memungkinkan pengguna melihat daftar produk, membuka detail produk, memfilter produk berdasarkan kategori, dan mengelola produk melalui fitur CRUD.

Aplikasi dibangun menggunakan React dengan pendekatan component-based UI, Tailwind CSS, React Router, serta integrasi REST API dari Fake Store API.

## 2. Features

### Main Features

- **Product Listing** – Menampilkan daftar produk dari Fake Store API.
- **Product Detail** – Menampilkan informasi detail produk berdasarkan ID.
- **Category Filter** – Memfilter produk berdasarkan kategori.
- **Pagination** – Membagi daftar produk menjadi beberapa halaman.
- **Add Product** – Menambahkan produk melalui form.
- **Edit Product** – Mengubah informasi produk.
- **Delete Product** – Menghapus produk.
- **Loading State** – Menampilkan kondisi ketika data sedang dimuat.
- **Error Handling** – Menangani kegagalan pengambilan data dari API.
- **Responsive UI** – Menggunakan Tailwind CSS untuk mendukung berbagai ukuran layar.

### Additional Features

- Login menggunakan Fake Store API.
- Authentication state management menggunakan React Context.
- Custom Hook `useAuth` untuk mengakses authentication context.
- Protected Route untuk halaman Users.
- Proteksi akses Add, Edit, dan Delete agar pengguna harus login terlebih dahulu.
- Logout functionality.
- Halaman Users untuk menampilkan daftar pengguna dari API.

**Scope Authentication:** Fitur Register dan halaman detail User tidak diimplementasikan karena termasuk bagian bonus pada assignment.

## 3. Technology Stack

| Technology | Usage |
|---|---|
| React 19 | Frontend library |
| Vite | Development server and build tool |
| JavaScript (ES6+) | Application logic |
| Tailwind CSS 4 | Styling and responsive layout |
| React Router DOM 7 | Client-side routing |
| Fake Store API | REST API integration |
| Git & GitHub | Version control |

## 4. API Integration

Project ini menggunakan [Fake Store API](https://fakestoreapi.com/).

**Base URL:**

`https://fakestoreapi.com`

### Product Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products` | Retrieve all products |
| GET | `/products/:id` | Retrieve product details |
| GET | `/products/categories` | Retrieve product categories |
| POST | `/products` | Add a new product |
| PUT | `/products/:id` | Update an existing product |
| DELETE | `/products/:id` | Delete a product |

### User and Authentication Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/users` | Retrieve all users |
| POST | `/auth/login` | Authenticate user and retrieve token |

### API Notes

Fake Store API is a demonstration API. POST, PUT, and DELETE operations return simulated responses and do not permanently modify the API database. Therefore, product changes may not persist after refreshing the application.

Pagination is implemented on the frontend by processing the retrieved product data.

## 5. Project Structure

```text
src/
├── assets/
├── components/
│   ├── AddProductForm.jsx
│   ├── CategoryFilter.jsx
│   ├── EditProductForm.jsx
│   ├── ErrorMessage.jsx
│   ├── Footer.jsx
│   ├── Loading.jsx
│   ├── Navbar.jsx
│   ├── Pagination.jsx
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   └── Protectedroute.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── hooks/
│   └── useAuth.js
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── ProductDetail.jsx
│   └── Users.jsx
│
├── services/
│   ├── api.js
│   ├── authService.js
│   ├── productService.js
│   └── userService.js
│
├── App.jsx
├── main.jsx
└── index.css

.env
.gitignore
index.html
package.json
package-lock.json
README.md
vite.config.js
```

## 6. Installation and Setup

### Prerequisites

- Node.js
- npm
- Git

### Clone Repository

```bash
git clone https://github.com/IslahShalahuddin/Assigment8-Days30-Mini-Project-React-CRUD.git
```

### Navigate to Project Directory

```bash
cd Assigment8-Days30-Mini-Project-React-CRUD
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the project root directory:

```env
VITE_API_BASE_URL=https://fakestoreapi.com
```

The application uses this environment variable as the API base URL.

### Run Development Server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 7. Demo Login

The application uses Fake Store API authentication.

Example demo credentials:

- Username: `mor_2314`
- Password: `83r5^_`

Authentication is intended for demonstration and learning purposes.

## 8. Learning Implementation

This project applies several React concepts:

- Functional Components
- Props and Parent-Child Communication
- State Management with `useState`
- Side Effects with `useEffect`
- API Integration using Fetch
- CRUD Operations
- React Router and Dynamic Routes
- React Context API
- Custom Hooks
- Conditional Rendering
- Protected Routes
- Component-Based Styling with Tailwind CSS

## 9. Repository

**GitHub Repository:**

[https://github.com/IslahShalahuddin/Assigment8-Days30-Mini-Project-React-CRUD](https://github.com/IslahShalahuddin/Assigment8-Days30-Mini-Project-React-CRUD)

## 10. Author

**Islah Shalahuddin**

GitHub: [@IslahShalahuddin](https://github.com/IslahShalahuddin)

---