// import React from "react";
// import s from "./ContactSection.module.css";
// import instaIcon from "../assets/icons/insta.png";
// import whatsappIcon from "../assets/icons/whatsapp.png";

// // Подключаем стили
// // Создаем компонент с возвратом jsx разметки
// // Заголовок
// // Grid контейнер с карточками: телефоном, соцсетями, адресос, с рабочими часами
// // Встраиваем карту Гугл
// // Экспорт компонента

// export default function ContactSection() {
//   return (
//     <div className={s.contactContainer}>
//       <h2 className={s.contactTitle}>Contact</h2>

//       <div className={s.contactGrid}>
//         <div className={s.contactBox}>
//           <h3>Phone</h3>
//           <a href="tel:+4999999999999" className={s.phoneLink}>
//             +49 999 999 99 99
//           </a>
//         </div>

//         <div className={s.contactBox}>
//           <h3>Socials</h3>
//           <div className={s.socialIcons}>
//             <a
//               href="https://www.instagram.com/startainstitute?igsh=MXZxMGoxc3N1bWtlZA=="
//               className={s.icon}
//             >
//               <img src={instaIcon} alt="Instagram" />
//             </a>
//             <a href="https://wa.me/77778400800" className={s.icon}>
//               <img src={whatsappIcon} alt="WhatsApp" />
//             </a>
//           </div>
//         </div>

//         <div className={s.contactBox}>
//           <h3>Address</h3>
//           <p>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
//         </div>

//         <div className={s.contactBox}>
//           <h3>Working Hours</h3>
//           <p>24 hours a day</p>
//         </div>
//       </div>

//       <div className={s.mapContainer}>
//         <iframe
//           className={s.map}
//           src="https://maps.google.com/maps?q=Linkstraße 2, 8 OG, 10785, Berlin, Deutschland&output=embed"
//           allowFullScreen
//           loading="lazy"
//         ></iframe>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import s from "./ContactSection.module.css";
import instaIcon from "../assets/icons/insta.png";
import whatsappIcon from "../assets/icons/whatsapp.png";
import instaIconWhite from "../assets/icons/instaIconWhite.png";
import whatsappIconWhite from "../assets/icons/whatsappIconWhite.png";


// Импортируем зависимости
// Хуки для управления состоянием и выполнения действий после рендера
// Стили для компонента
// Иконка Instagram для светлой темы
// Иконка WhatsApp для светлой темы
// Иконка Instagram для тёмной темы
// Иконка WhatsApp для тёмной темы

// Создаю главный компонент ContactSection. Прописываю функцию для получения начальной темы из localStorage (светлая или тёмная). Состояние для отслеживания текущей темы (светлая/тёмная) UseState
// useEffect для отслеживания изменений в теме. Функция для изменения темы и сохранения в localStorage. Обновляю состояние темы и сохраняю в localStorage.

// Создаем наблюдателя, который будет отслеживать изменения темы на странице. Очищаем observer при размонтировании компонента. Пустой массив зависимостей, чтобы useEffect сработал только один раз. Куегкт 1


// Компонент отображает секцию с контактной информацией: телефон, соцсети, адрес, рабочие часы и карту. 
// В зависимости от выбранной темы (светлая или тёмная) иконки соцсетей меняются. 
// Также встроена карта с местоположением компании.



export default function ContactSection() {
  // Проверяем сохранённое значение в localStorage
  const getInitialTheme = () => localStorage.getItem("theme") === "dark";

  const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme);

  useEffect(() => {
    const handleThemeChange = () => {
      const isDark = document.body.classList.contains("dark-theme");
      setIsDarkTheme(isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={s.contactContainer}>
      <h2 className={s.contactTitle}>Contact</h2>

      <div className={s.contactGrid}>
        <div className={s.contactBox}>
          <h3>Phone</h3>
          <a href="tel:+4999999999999" className={s.phoneLink}>
            +49 999 999 99 99
          </a>
        </div>

        <div className={s.contactBox}>
          <h3>Socials</h3>
          <div className={s.socialIcons}>
            <a href="https://www.instagram.com/startainstitute" className={s.icon}>
              <img src={isDarkTheme ? instaIconWhite : instaIcon} alt="Instagram" />
            </a>
            <a href="https://wa.me/77778400800" className={s.icon}>
              <img src={isDarkTheme ? whatsappIconWhite : whatsappIcon} alt="WhatsApp" />
            </a>
          </div>
        </div>

        <div className={s.contactBox}>
          <h3>Address</h3>
          <p>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
        </div>

        <div className={s.contactBox}>
          <h3>Working Hours</h3>
          <p>24 hours a day</p>
        </div>
      </div>

      <div className={s.mapContainer}>
        <iframe
          className={s.map}
          src="https://maps.google.com/maps?q=Linkstraße 2, 8 OG, 10785, Berlin, Deutschland&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}