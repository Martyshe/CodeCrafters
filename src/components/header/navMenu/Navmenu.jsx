import React from "react";
import styles from "./NavMenu.module.css";
import logo from "./assets/logo.png";

import heartIcon from "./assets/heart-icon.png";
import bagIcon from "./assets/bag-icon.png"
import ThemeBtn from "../../themeBtn/ThemeBtn";



const NavMenu = () => {
  return (
    <header className={styles.header}>
      {/* Левая часть с логотипом и переключателем темы */}
      <div className={styles.left}>
        <div className={styles.logo}><img src={logo} alt="logo" className={styles.logoImage} /> </div> {/* Логотип */}
       <ThemeBtn />
      </div>

      {/* Средняя часть - кнопка скидки и меню */}
      <div className={styles.center}>
        <button className={styles.discount}>1 day discount!</button>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="#" className={styles.navLink}>Main Page</a></li>
            <li><a href="#" className={styles.navLink}>Categories</a></li>
            <li><a href="#" className={styles.navLink}>All products</a></li>
            <li><a href="#" className={styles.navLink}>All sales</a></li>
          </ul>
        </nav>
      </div>

      {/* Правая часть - иконки "сердце" и "сумка" */}
      <div className={styles.right}>
        <button className={styles.icon}><img src={heartIcon} alt="Сердце" /></button> {/* Сердечко */}
        <button className={styles.icon}><img src={bagIcon} alt="Сумка" /></button> {/* Сумка */}
      </div>
    </header>
  );
};

export default NavMenu;