// import React, { useEffect, useState } from "react";
// import s from "./CategoriesContainer.module.css";
// import CategoryCard from "../../categoryCard/CategoryCard";
// import { back } from "../../../constants";
// import { Link } from "react-router-dom";

// export default function CategoriesContainer({ amount }) {
//   const [category, setCategory] = useState([]);
//   useEffect(() => {
//     fetch(`${back}/categories/all`)
//       .then((response) => response.json())
//       .then((data) => {
//         // Оставляем первые "amount" категории и запихиваем в State
//         const slicedCategories = data.slice(0, amount);

//         setCategory(slicedCategories);
//       })
//       .catch(() => alert("Перезагрузите страницу"));
//   }, []);

// //   return (
// //     <div className={s.mainContainer}>
// //       <div className={s.categoriesContainer}>
// //         {category.map((el) => (
// //           <Link key={el.id} to={`/productsByCategory/${el.id}?title=${el.title}`}>
// //           <CategoryCard {...el} />
// //         </Link>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// return (
//   <div className={s.mainContainer}>
//     <div className={s.categoriesContainer}>
//       {category.map((el) => {
//         // Проверяем, находится ли пользователь в "/Categories"
//         const isCategoriesPage = location.pathname.includes("/Categories");
//         const linkTo = isCategoriesPage
//           ? `/productsByCategory/${el.id}?title=${el.title}`
//           : `/Categories/${el.title}?id=${el.id}`;

//         return (
//           <Link key={el.id} to={linkTo}>
//             <CategoryCard {...el} />
//           </Link>
//         );
//       })}
//     </div>
//   </div>
// );
// };


import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Добавили useLocation
import s from "./CategoriesContainer.module.css";
import CategoryCard from "../../categoryCard/CategoryCard";
import { back } from "../../../constants";

export default function CategoriesContainer({ amount }) {
  const [category, setCategory] = useState([]);
  const location = useLocation(); // Используем useLocation

  useEffect(() => {
    fetch(`${back}/categories/all`)
      .then((response) => response.json())
      .then((data) => {
        const slicedCategories = data.slice(0, amount);
        setCategory(slicedCategories);
      })
      .catch(() => alert("Перезагрузите страницу"));
  }, [amount]); // Добавили amount в зависимости

  return (
    <div className={s.mainContainer}>
      <div className={s.categoriesContainer}>
        {category.map((el) => {
          const isCategoriesPage = location.pathname.includes("/Categories");
          const linkTo = isCategoriesPage
            ? `/productsByCategory/${el.id}?title=${el.title}`
            : `/Categories/${el.title}?id=${el.id}`;

          return (
            <Link key={el.id} to={linkTo}>
              <CategoryCard {...el} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
