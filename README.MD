# 📦 Product Inventory Manager

Веб-застосунок для управління товарами, їх категоріями, кількістю, цінами та описами, з можливістю пошуку, сортування, редагування, видалення та експорту в CSV.

---

## 🚀 Функціонал

### 🔐 Авторизація користувачів
- Реєстрація та вхід
- Захист доступу до панелі товарів

### 📦 Облік товарів
- Додавання, редагування та видалення записів
- Збереження назви, категорії, ціни, кількості, опису
- Автоматична дата створення

### 🔍 Пошук та сортування
- Пошук за назвою, категорією та описом
- Сортування за ID, назвою, ціною, категорією, кількістю

### 🗂 Експорт даних
- Експорт списку товарів у CSV-файл одним кліком

---

## 🛠 Використані технології

### Frontend
- React
- Axios
- React Router
- SCSS

### Backend
- Node.js
- Express
- SQLite (через sqlite3)

---

## 📁 Структура проєкту

Product-Inventory-Manager/
- │
- ├── backend/
- │   ├── controllers/
- │   │   ├── authController.js
- │   │   └── productController.js
- │   ├── models/
- │   │   ├── db.js
- │   │   ├── User.js
- │   │   └── Product.js
- │   ├── routes/
- │   │   ├── auth.js 
- │   │   └── products.js 
- │   ├── server.js
- │   └── database.sqlite 
- │
- ├── frontend/
- │   ├── src/
- │   │   ├── components/
- │   │   │   ├── ProductList.jsx
- │   │   │   ├── EditProductForm.jsx
- │   │   │   ├── ProductControls.jsx
- │   │   │   ├── ProductForm.jsx
- │   │   │   └── ProductTable.jsx
- │   │   ├── pages/
- │   │   │   ├── HomePage.jsx
- │   │   │   ├── LoginPage.jsx
- │   │   │   └── RegisterPage.jsx
- │   │   ├── styles/
- │   │   │   ├── LoginPage.scss
- │   │   │   ├── ProductForm.scss 
- │   │   │   └── ProductList.scss
- │   │   ├── App.js
- │   │   └── index.js
- │   └── package.json
- │
- └── README.md


---

## ⚙️ Встановлення та запуск

### 1️⃣ Клонування проєкту
```bash
git clone https://github.com/DenisGordProgrammer/product-inventory-manager.git
cd product-inventory-manager

🖥 Backend

Встановлення залежностей:

cd backend
npm install


Запуск сервера:

npm start


Сервер працює за адресою: http://localhost:5000

🌐 Frontend

Встановлення залежностей:

cd frontend
npm install


Запуск React:

npm start


Frontend відкриється за адресою: http://localhost:3000
