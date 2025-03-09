import React from "react";
import styles from "./BannerSection.module.css";
import bannerImage from "./assets/Banner.jpg"; 
import Button from "../../button/Button"; 


// Изображение баннера: Ты используешь тег <img>, чтобы отобразить картинку (bannerImage). Это визуальная часть баннера.
// Заголовок: Заголовок "Amazing Discounts on Garden Products!" разбит на две строки с помощью <br/>, чтобы текст выглядел красиво.
// Кнопка: Ты используешь компонент Button, который при нажатии выводит в консоль сообщение "Go to checkout". 
// Это временная логика, которую можно заменить на реальную навигацию.
// Зачем это нужно:
// Баннер привлекает внимание пользователя и сообщает о скидках или акциях. Это важный элемент для маркетинга и повышения вовлеченности.




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
