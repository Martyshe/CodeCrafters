import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProductsPage from '../pages/AllProductsPage';
import HomePage from '../pages/HomePage';
import AllSalesPage from '../pages/AllSalesPage';
import CategoriesPage from '../pages/categoriesPage/CategoriesPage';
import ProductsByCategory from '../pages/ProductsByCategory';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import Cart from '../components/cart/Cart';

const AppRouter = () => (
    <Router>
        <Breadcrumbs />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/all-products" element={<AllProductsPage />} />
            <Route path="/all-sales" element={<AllSalesPage />} />
            <Route path="/productsByCategory/:categoryId" element={<ProductsByCategory />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </Router>
);

export default AppRouter;