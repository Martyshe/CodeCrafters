
// import React, { useEffect, useState } from "react";
// import SaleSection from "../components/main/saleSection/SaleSection";
// import { useProductFilter } from "../components/productsFilter/useProductFilter";
// import ProductsFilter from "../components/productsFilter/ProductsFilter";
// import { back } from "../constants";
// import Skeleton from "../components/skeleton/Skeleton";


// export default function AllSalesPage() {
//   const [allProducts, setAllProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showSkeleton, setShowSkeleton] = useState(true); // Состояние для управления скелетоном

//   Загрузка всех продуктов с сервера
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${back}/products/all`);
//         const data = await response.json();
//         setAllProducts(data);

//         // Устанавливаем задержку в 2 секунды перед скрытием скелетона
//         setTimeout(() => {
//           setIsLoading(false);
//           setShowSkeleton(false);
//         }, 500);
//       } catch (error) {
//         setError(error);
//         setIsLoading(false);
//         setShowSkeleton(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     fetch(`${back}/products/all`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllProducts(data);
//         setIsLoading(false);

//                 // Устанавливаем задержку в 2 секунды перед скрытием скелетона
//         setTimeout(() => {
//           setIsLoading(false);
//           setShowSkeleton(false);
//         }, 500);
//       })
//       .catch((error) => {
//         setError(error);
//         setIsLoading(false);
//       });
//   }, []);

//   // Инициализация начальных фильтров
//   const initialFilters = {
//     priceFrom: "",
//     priceTo: "",
//     discounted: true, // Устанавливаем discounted в true, так как на этой странице только товары со скидкой
//     sortOrder: "by default",
//   };

//   // Используем кастомный хук для фильтрации и сортировки
//   const { filteredProducts, handleFilterChange } = useProductFilter(initialFilters);

//   // Фильтруем продукты, чтобы оставить только те, у которых есть скидка
//   const discountedProducts = filteredProducts.filter(
//     (product) => product.discont_price !== null
//   );

//   const style = {
//     maxWidth: "100%",
//     padding: "2rem",
//     paddingLeft: "2.25rem",
//     color: "#424436",
//   };

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//     <h2 style={style}>Discounted items</h2>
//     {/* Передаем handleFilterChange в компонент ProductsFilter и скрываем кнопку "Discounted items" */}
//     <ProductsFilter
//       onFilterChange={handleFilterChange}
//       hideDiscountedCheckbox
//       filterStyle={{
//         paddingLeft: "2.25rem",
//         borderRadius: "8px",
//       }}
//     />
//     {/* Отображаем скелетон, если showSkeleton равно true */}
//     {showSkeleton ? (
//       <div style={{ paddingLeft: "2rem" , paddingRight: "2rem"}}> {/* Добавляем padding только для скелетона */}
//         <Skeleton />
//       </div>
//     ) : (
//       <SaleSection products={discountedProducts} amount={discountedProducts.length} />
//     )}
//   </div>
//   );
// }

import React, { useEffect, useState } from "react";
import SaleSection from "../components/main/saleSection/SaleSection";
import { useProductFilter } from "../components/productsFilter/useProductFilter";
import ProductsFilter from "../components/productsFilter/ProductsFilter";
import { back } from "../constants"; // Убедитесь, что путь к константам правильный

export default function AllSalesPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Загрузка всех продуктов с сервера
  useEffect(() => {
    fetch(`${back}/products/all`)
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  // Инициализация начальных фильтров
  const initialFilters = {
    priceFrom: "",
    priceTo: "",
    discounted: true, // Устанавливаем discounted в true, так как на этой странице только товары со скидкой
    sortOrder: "by default",
  };

  // Используем кастомный хук для фильтрации и сортировки
  const { filteredProducts, handleFilterChange } = useProductFilter(initialFilters);

  // Фильтруем продукты, чтобы оставить только те, у которых есть скидка
  const discountedProducts = filteredProducts.filter(
    (product) => product.discont_price !== null
  );
  

  const style = {
    maxWidth: "100%",
    padding: "2rem",
    paddingLeft:'2.25rem',
    color: "#424436",
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2 style={style}>Discounted items</h2>
      {/* Передаем handleFilterChange в компонент ProductsFilter и скрываем кнопку "Discounted items" */}
      <ProductsFilter onFilterChange={handleFilterChange} hideDiscountedCheckbox    filterStyle={{
    paddingLeft: "2.25rem",
    borderRadius: "8px",
  }}/>
      <SaleSection products={discountedProducts} amount={discountedProducts.length} />
    </div>
  );
}