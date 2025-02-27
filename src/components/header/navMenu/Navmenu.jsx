import React, { useState } from "react";
import styles from "./NavMenu.module.css";
import logo from "./assets/logo.png";
import heartIcon from "./assets/heart-icon.png";
import bagIcon from "./assets/bag-icon.png";
import ThemeBtn from "../../themeBtn/ThemeBtn";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavMenu = () => {
  // Получаем данные корзины из Redux store
  const cartItems = useSelector(state => state.cart.items);
  const totalUniqueItems = cartItems.length;

  // Вычисляем общее количество товаров
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для управления бургерным меню

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Переключаем состояние меню
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
        <button className={styles.discount}>1 day discount!</button>
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
    <img src={heartIcon} alt="Сердце" />
  </button>
  <button className={styles.icon}>
    <a href="/cart" className={styles.cartLink}>
      <img src={bagIcon} alt="Сумка" />
      {cartCount > 0 && (
        <span className={styles.cartCounter}>
          {totalUniqueItems}
        </span>
      )}
   </a>
  </button>
  

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
        <button className={styles.dropdownDiscount}>1 day discount!</button>
      </div>
    </div>
  );
};

export default NavMenu;
