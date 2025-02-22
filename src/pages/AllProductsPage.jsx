import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setProducts } from '../redux/productsSlice';
import ProductList from '../components/productList/ProductList';
import { back } from '../constants';

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);

  useEffect(() => {
    if (products.length === 0) {
      // Если список продуктов пуст, делаем запрос и загружаем их
      fetchProducts();
    }
  }, [products]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${back}/products/all`); // или ваш API
      const data = await response.json();
      dispatch(setProducts(data));
    } catch (error) {
      console.error("Ошибка загрузки продуктов:", error);
    }
  };

  return (
    <div>
      {/* Отображаем список продуктов */}
      <ProductList products={products} />
    </div>
  );
};
export default AllProductsPage;
