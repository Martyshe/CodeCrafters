import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProductsPage from '../pages/AllProductsPage'; // Убедитесь, что импорт правильный
import HomePage from '../pages/HomePage';
import AllSalesPage from '../pages/AllSalesPage';
import CategoriesPage from '../pages/categoriesPage/CategoriesPage';
// import ProductsByCategory from '../pages/ProductsByCategory';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import Cart from '../components/cart/Cart';
import ProductDetails from '../components/productDetails/ProductDetails';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setProducts } from '../redux/productsSlice';
import ProductList from '../components/productList/ProductList';
import Categories from '../pages/Categories';

// Уберите повторное объявление компонента AllProductsPage
// Этот компонент должен быть только один раз (в файле productsSlice, например)
const AppRouter = () => (
    <Router>
        <Breadcrumbs />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/all-products" element={<AllProductsPage />} /> {/* Используем уже импортированный компонент */}
            <Route path="/all-sales" element={<AllSalesPage />} />
            <Route path="/categories/:categoryId" element={<Categories />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
    </Router>
);

export default AppRouter;
