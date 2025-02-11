import React from "react";
import styles from "./BannerSection.module.css";
import bannerImage from "./assets/Banner.jpg"; 
import Button from "../../button/Button"; 

const BannerSection = () => { // Определяем компонент BannerSection
  return (
    <section className={styles.banner}>{/* Создаём секцию для баннера и применяем к ней стили */}
      <img src={bannerImage}  alt="Garden Products"  className={styles.bannerImage} /> {/*Указываем путь к изображению баннера*/} {/* Добавляем альтернативный текст для доступности*/}
      <div className={styles.content}>  {/* Контейнер для текста и кнопки */}
        <h1 className={styles.title}>Amazing Discounts <br/> {/* Используем <br/> для переноса строки */} on Garden Products!</h1>  {/* Заголовок баннера */}
        {/* Используем компонент кнопки */}
        <div className={styles.checkoutButtonWrapper}><Button onClick={() => console.log("Go to checkout")}>Check out</Button>
</div> {/* Кнопка для перехода */}
      </div>
    </section>
  );
};

export default BannerSection;