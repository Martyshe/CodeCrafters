import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProductsPage from "../pages/AllProductsPage";
import HomePage from "../pages/HomePage";
import AllSalesPage from "../pages/AllSalesPage";
import CategoriesPage from "../pages/categoriesPage/CategoriesPage";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import Cart from "../components/cart/Cart";
import ProductDetails from "../pages/ProductDetailsPage/ProductDetails";
import Categories from "../pages/Categories";
import NotFound from "../components/404/NotFound";
import FavoritesPage from "../pages/favorites/FavoritesPage";

const AppRouter = () => (
  <Router>
    <Breadcrumbs />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/all-products" element={<AllProductsPage />} />
      <Route path="/all-sales" element={<AllSalesPage />} />
      <Route path="/categories/:categoryId" element={<Categories />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/:title/:id" element={<ProductDetails />} />
    </Routes>
  </Router>
);

export default AppRouter;
