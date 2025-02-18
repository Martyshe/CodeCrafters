import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProductsPage from '../pages/AllProductsPage';
import HomePage from '../pages/HomePage';
import AllSalesPage from '../pages/AllSalesPage';
import CategoriesPage from '../pages/categoriesPage/CategoriesPage';
import Breadcrumbs from '../components/productBreadcrumbs/Breadcrumbs';

const AppRouter = () => (
    <Router>
        <Breadcrumbs />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/all-products" element={<AllProductsPage />} />
            <Route path="/all-sales" element={<AllSalesPage />} />
        </Routes>
    </Router>
);

export default AppRouter;