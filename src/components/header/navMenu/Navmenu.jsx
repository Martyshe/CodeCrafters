import React, { useState,useEffect } from "react";
import styles from "./NavMenu.module.css";
import logo from "./assets/logo.png";
import heartIcon from "./assets/heart-icon.png";
import bagIcon from "./assets/bag-icon.png";
import ThemeBtn from "../../themeBtn/ThemeBtn";
import { back } from "../../../constants";
import ProductOfTheDayModal from "../../productOfTheDayModal/ProductOfTheDayModal";
import { useDispatch } from "react-redux"; //  Добавляю импорт useDispatch
import { setProducts } from "../../../redux/productsSlice"; //  Добавляю импорт setProducts
// import ProductList from "../../productList/ProductList";


const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для управления бургерным меню

  const dispatch = useDispatch(); // Создаем dispatch

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productOfTheDay, setProductOfTheDay] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Загрузка всех продуктов с сервера
  useEffect(() => {
    fetch(`${back}/products/all`)
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        console.log(" Проверяю данных перед отправкой в Redux:", data);
        dispatch(setProducts(data)); 
        setIsLoading(false);
        console.log("Загруженные товары:", data); // проверка, есть ли товары
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

    //  товара со скидкой 50%
    const selectRandomProductOfTheDay = () => {
      if (allProducts.length > 0) {
        const randomIndex = Math.floor(Math.random() * allProducts.length);
        const selectedProduct = { ...allProducts[randomIndex], discount: 50 };
        setProductOfTheDay(selectedProduct);
        return selectedProduct; // Теперь можно сразу использовать
      }
    };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Переключаем состояние меню
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
        <ThemeBtn />
      </div>

      {/* Средняя часть - кнопка скидки и меню */}
      <div className={styles.navMenu}>
        {/* <button className={styles.discount}>1 day discount!</button> */}

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
      <div className={styles.rightSection}>
        <div className={styles.headerIcon}>
          <button className={styles.icon}>
            <img src={heartIcon} alt="Сердце" />
          </button>
          <button className={styles.icon}>
            <img src={bagIcon} alt="Сумка" />
          </button>
        </div>

        {/* Кнопка бургерного меню */}
        <button
          className={styles.burgerMenu}
          onClick={toggleMenu}
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
        <button className={styles.dropdownDiscount} onClick={openModal}>
  1 day discount!
</button>
      </div>
         {/* Затемнение фона при открытой модалке */}
         {isModalOpen && <div className={styles.overlay} onClick={closeModal}></div>}

         {/* Модальное окно "Товар дня" */}
         {isModalOpen && productOfTheDay && (
         <ProductOfTheDayModal product={productOfTheDay} closeModal={closeModal} />
          )}
          </div>


    
  );
};

export default NavMenu;
