# DibiTech Marketplace – React Day 30 Mini Project

## 1. Project Overview

DibiTech Marketplace is a web-based marketplace application built using React. This project was developed as part of the Day 30 Mini Project assignment.

The application integrates with the Fake Store API to display product data, product details, categories, and user information. It also implements authentication, protected routes, and reusable React components.

## 2. Features

### Main Features
- Display products from Fake Store API.
- View product details.
- Filter products by category.
- Pagination for product listings.
- Responsive user interface.
- Loading and error states.
- Reusable React components.

### Additional Features
- User login using Fake Store API authentication.
- Authentication state management using React Context.
- Protected routes for authenticated users.
- Display user list from API.
- Logout functionality.

## 3. Tech Stack

- React – Frontend library.
- Vite – Development and build tool.
- JavaScript – Application logic.
- Tailwind CSS – UI styling.
- React Router DOM – Client-side routing.
- Fake Store API – External API integration.
- Git & GitHub – Version control.

## 4. API Integration

This project uses [Fake Store API](https://fakestoreapi.com/).

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get product details |
| GET | `/products/categories` | Get product categories |
| GET | `/products/category/:category` | Get products by category |
| GET | `/users` | Get all users |
| POST | `/auth/login` | User authentication |

Note: Fake Store API is a demonstration API. Some write operations are simulated and do not provide persistent database storage.

## 5. Installation and Setup

### Clone Repository

```bash
git clone https://github.com/IslahShalahuddin/Assigment8-Days30-Mini-Project-React-CRUD
```

### Navigate to Project Folder

```bash
cd DibiTech-React-Day30
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=https://fakestoreapi.com
```

### Run Development Server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 6. Demo Login

Use the following Fake Store API demo credentials:

- Username: `mor_2314`
- Password: `83r5^_`

## 7. Project Structure

```text
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── ProductList.jsx
│   ├── CategoryFilter.jsx
│   ├── Pagination.jsx
│   ├── Loading.jsx
│   ├── ErrorMessage.jsx
│   └── ProtectedRoute.jsx
├── pages/
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   ├── Login.jsx
│   └── Users.jsx
├── context/
│   └── AuthContext.jsx
├── hooks/
│   └── useAuth.js
├── services/
│   ├── api.js
│   ├── productService.js
│   ├── authService.js
│   └── userService.js
├── App.jsx
├── main.jsx
└── index.css
```

## 8. Author

**Islah Shalahuddin**

GitHub: [IslahShalahuddin](https://github.com/IslahShalahuddin)

---

Developed as part of the React Day 30 Mini Project.