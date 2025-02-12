import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Products from '../pages/Products';

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products" element={<Products />} />
        </Routes>
    </Router>
);

export default AppRouter;