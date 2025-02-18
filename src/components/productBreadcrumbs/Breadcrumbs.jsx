import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  const location = useLocation(); // Получаем текущий путь
  const pathnames = location.pathname.split("/").filter((x) => x); // Разбиваем путь на части

  let fixedCrumbs = [];

  // Показываем "Main Page" только на определённых страницах
  if (
    location.pathname.startsWith("/all-products") ||
    location.pathname.startsWith("/all-sale") ||
    location.pathname.startsWith("/categories") ||
    location.pathname.startsWith("/tools-and-equipment")
  ) {
    fixedCrumbs.push({ name: "Main Page", path: "/" });
  }

  // Добавляем "All Products" или "All Sale" в зависимости от пути
  if (location.pathname.startsWith("/all-products")) {
    fixedCrumbs.push({ name: "All Products", path: "/all-products" });
  } else if (location.pathname.startsWith("/all-sale")) {
    fixedCrumbs.push({ name: "All Sale", path: "/all-sale" });
  } else if (location.pathname.startsWith("/categories")) {
    fixedCrumbs.push({ name: "Categories", path: "/categories" });
  } else if (location.pathname.startsWith("/categories/tools-and-equipment")) {
    fixedCrumbs.push({ name: "Tools and Equipment", path: "/categories/tools-and-equipment" });
  }

  return (
    <div className={styles.breadcrumbs}>
      {fixedCrumbs.map((crumb, index) => {
        const isLastFixedCrumb = index === fixedCrumbs.length - 1; // Проверяем, является ли текущий элемент последним в фиксированной части

        return (
          <React.Fragment key={crumb.path}>
            {isLastFixedCrumb ? (
              <span className={styles.current}>{crumb.name}</span>
            ) : (
              <Link to={crumb.path} className={styles.link}>
                {crumb.name}
              </Link>
            )}
            {index < fixedCrumbs.length - 1 && <span className={styles.separator}>{"—"}</span>}
          </React.Fragment>
        );
      })}

      {/* Динамическая часть пути */}
      {pathnames.slice(fixedCrumbs.length).map((name, index) => {
        const routeTo = `/${pathnames.slice(0, fixedCrumbs.length + index + 1).join("/")}`; // Формируем путь
        const isLast = index === pathnames.slice(fixedCrumbs.length).length - 1; // Проверяем, является ли текущий элемент последним

        return isLast ? (
          <span key={name} className={styles.current}>
            {"—"} {name}
          </span>
        ) : (
          <Link key={name} to={routeTo} className={styles.link}>
            {"—"} {name}
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;