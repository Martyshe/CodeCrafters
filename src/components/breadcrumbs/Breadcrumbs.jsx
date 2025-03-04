import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";


// Ты создала компонент Breadcrumbs, который показывает путь от главной страницы до текущей. Это помогает пользователю понять, где он находится на сайте.
// Как это работает:
// Определение пути: Ты используешь useLocation из react-router-dom, чтобы получить текущий URL.
// Форматирование названий: Ты преобразуешь части URL в читаемые названия (например, "categories" → "Categories").
// Отображение: Ты отображаешь хлебные крошки как ссылки, кроме последнего элемента, который показывается как текущая страница.
// Зачем это нужно:
// Хлебные крошки улучшают навигацию по сайту. Они помогают пользователю быстро вернуться на предыдущие страницы.


const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x); // Разбиваем путь

  if (!pathnames.length) return null; // Если мы на главной, не рендерим хлебные крошки

  // ✅ Декодируем title из URL
  const params = new URLSearchParams(location.search);
  let decodedTitle = params.get("title") ? decodeURIComponent(params.get("title")) : null;

  // ✅ Берём только первое слово из title, если оно есть
  if (decodedTitle) {
    decodedTitle = decodedTitle.split(" ")[0];
  }

  let path = "";
  const breadcrumbs = [{ name: "Main Page", path: "/" }]; // Всегда добавляем "Main Page"

  // Динамически создаем хлебные крошки
  const newCrumbs = pathnames.map((name, index) => {
    path += `/${name}`;
    let formattedName = decodeURIComponent(name)
      .replace(/-/g, " ") // Убираем дефисы
      .toLowerCase() // Преобразуем всё в нижний регистр
      .replace(/^./, (char) => char.toUpperCase()); // Делаем заглавной только первую букву строки

    if (decodedTitle && index === pathnames.length - 1) {
      formattedName = decodedTitle;
    }

    return { name: formattedName, path };
  });

  return (
    <div className={styles.breadcrumbs}>
      {[...breadcrumbs, ...newCrumbs].map((crumb, index, arr) => {
        const isLast = index === arr.length - 1; // Последняя крошка
        return (
          <React.Fragment key={crumb.path}>
            {isLast ? (
              <span className={styles.current}>{crumb.name}</span>
            ) : (
              <Link to={crumb.path} className={styles.link}>
                {crumb.name}
              </Link>
            )}
            {index < arr.length - 1 && <div className={styles.separator}>—</div>}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
