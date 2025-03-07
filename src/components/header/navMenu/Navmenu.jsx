import React, { useEffect, useState } from "react";
import styles from "./NavMenu.module.css";
import logo from "./assets/logo.png";
import heartIcon from "./assets/heart-icon.png";
import bagIcon from "./assets/bag-icon.png";
import ThemeBtn from "../../themeBtn/ThemeBtn";
import { useSelector } from "react-redux";
import { back } from "../../../constants";
import ProductOfTheDayModal from "../../productOfTheDayModal/ProductOfTheDayModal";



// Ты создала компонент NavMenu, который включает логотип, навигационное меню, иконки (сердце и корзина), 
// бургер-меню для мобильных устройств и модальное окно с товаром дня.
// Как это работает:
// Логотип и тема: Логотип отображается с помощью <img>, а рядом находится кнопка для переключения темы (ThemeBtn).
// Навигация: Ты используешь <nav> и <ul> для создания меню с ссылками на основные страницы (главная, категории, все товары, все скидки).
// Иконки: Иконки "сердце" и "корзина" отображаются с помощью <img>. На иконке корзины показывается количество товаров (cartCount), которое берется из Redux.
// Бургер-меню: При нажатии на иконку бургера (burgerMenu) открывается выпадающее меню. Это реализовано через состояние isMenuOpen и CSS-классы.
// Модальное окно: При нажатии на кнопку "1 day discount!" открывается модальное окно с товаром дня. Товар выбирается случайным образом из списка всех товаров.
// Зачем это нужно:
// Хедер — это главная навигационная панель сайта. Он помогает пользователю быстро находить нужные разделы, видеть количество товаров в корзине и узнавать о текущих акциях.




const NavMenu = () => {
  // Получаю данные корзины из Redux store,useSelector забирает данные из Redux.
  const cartItems = useSelector((state) => state.cart.items); 
  const totalUniqueItems = cartItems.length;// Количество уникальных товаров в корзине

  const favorites = useSelector(state => state.favorites?.items || []);
  const favoritesCount = favorites.length;// Количество товаров в избранном

  // Вычисляем общее количество товаров
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для управления бургерным меню,отслеживает, открыто меню или нет.

  const toggleMenu = () => { // Функция для открытия/закрытия бургерного меню
    setIsMenuOpen(!isMenuOpen); // Переключаем состояние меню
  };
  // const dispatch = useDispatch(); // Создаем dispatch

  //  Состояния для модального окна и товаров
  const [isModalOpen, setIsModalOpen] = useState(false);// Открыто ли модальное окно
  const [productOfTheDay, setProductOfTheDay] = useState(null);// Хранит "товар дня"
  const [allProducts, setAllProducts] = useState([]);// Хранит список всех товаров
  // const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);// Состояние для ошибок загрузки

  // Загрузка всех продуктов с сервера
  useEffect(() => {
    fetch(`${back}/products/all`)
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
       
        // dispatch(setProducts(data));
        // setIsLoading(false);
        
      })
      .catch((error) => {
        setError(error);
        // setIsLoading(false);
      });
  }, []);

  //  товара со скидкой 50%
  const selectRandomProductOfTheDay = () => {
    if (allProducts.length > 0) {
      const randomIndex = Math.floor(Math.random() * allProducts.length); //  округляю число вниз до ближ. целого
      const selectedProduct = { ...allProducts[randomIndex], discount: 50 };
      setProductOfTheDay(selectedProduct);
      return selectedProduct; // Теперь можно сразу использовать
    }
  };

  // Функция открытия модального окна
  const openModal = () => {
    selectRandomProductOfTheDay(); // Выбираю товар дня перед открытием модального окна
    setIsModalOpen(true);
  };
  // Функция закрытия модального окна
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.header}>
      {/* Левая часть с логотипом и переключателем темы */}
      <div className={styles.headerBtnLogo}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" className={styles.logoImage} />
        </div>
        <ThemeBtn /> {/* кнопка смены темы */}
      </div>

      {/* Средняя часть - кнопка скидки и меню */}
      <div className={styles.navMenu}>
        {/* Кнопка открытия модального окна */}
        <button className={styles.discount} onClick={openModal}>
          1 day discount!
        </button>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <a href="/" className={styles.navLink}>
                Main Page
              </a>
            </li>
            <li>
              <a href="/categories" className={styles.navLink}>
                Categories
              </a>
            </li>
            <li>
              <a href="/all-products" className={styles.navLink}>
                All products
              </a>
            </li>
            <li>
              <a href="/all-sales" className={styles.navLink}>
                All sales
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Правая часть - иконки "сердце", "сумка" и бургерное меню */}
      <div className={styles.headerIcon}>
  <button className={styles.icon}>
    <a href="/favorites" className={styles.cartLink}>   {/*  переход в избранное*/}
      <img src={heartIcon} alt="Сердце" />
      {favoritesCount > 0 && (
        <span className={styles.favoritesCounter}>{favoritesCount}</span>
      )}
    </a>
  </button>
  <button className={styles.icon}>
    <a href="/cart" className={styles.cartLink}>  {/*  переход в корзину*/}
      <img src={bagIcon} alt="Сумка" />
      {cartCount > 0 && (
        <span className={styles.cartCounter}>{totalUniqueItems}</span>
      )}
    </a>
  </button>


        {/* Кнопка бургерного меню */}
        <button
          className={styles.burgerMenu}
          onClick={toggleMenu}
          // для кнопок, чтобы screen readers могли правильно озвучить их назначение.
          aria-label="Open menu" 
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
      </div>

      {/* Оверлей (полупрозрачный слой) */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={toggleMenu}></div>
      )}

      {/* Выпадающее меню */}
      <div
        className={`${styles.dropdownMenu} ${isMenuOpen ? styles.open : ""}`}
      >
        {/* Кнопка закрытия (крестик) */}
        <button
          className={styles.closeButton}
          onClick={toggleMenu}
          // для кнопок, чтобы screen readers могли правильно озвучить их назначение.
          aria-label="Close menu"
        >
          &times;
        </button>

        {/* Навигация и кнопка скидки */}
        <nav className={styles.dropdownNav}>
          <ul className={styles.dropdownNavList}>
            <li>
              <a href="/" className={styles.navLink}>
                Main Page
              </a>
            </li>
            <li>
              <a href="/categories" className={styles.navLink}>
                Categories
              </a>
            </li>
            <li>
              <a href="/all-products" className={styles.navLink}>
                All products
              </a>
            </li>
            <li>
              <a href="/all-sales" className={styles.navLink}>
                All sales
              </a>
            </li>
          </ul>
        </nav>
        <button className={styles.discount} onClick={openModal}>
          1 day discount!
        </button>
      </div>
      {/* Затемнение фона при открытой модалке */}
      {isModalOpen && (
        <div className={styles.overlay} onClick={closeModal}></div>
      )}

      {/* Модальное окно "Товар дня" */}
      {isModalOpen && productOfTheDay && (
        <ProductOfTheDayModal
          product={productOfTheDay}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default NavMenu;
