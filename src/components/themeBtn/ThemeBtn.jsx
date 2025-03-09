import React, { useState, useEffect } from "react";
import s from './ThemeBtn.module.css';

import sunIcon from './assets/sun-icon.png';
import moonIcon from './assets/moon-icon.png';


// Импортируем необходимые зависимости и стили
// Логика компонента для переключения между светлой и тёмной темой

// Состояние для отслеживания текущей темы (светлая/тёмная)

 // useEffect для проверки сохраненной темы в localStorage при загрузке компонента
 // Получаем сохранённую тему
 // Если сохранена тёмная тема
 // Устанавливаем тёмную тему
 // Добавляем класс для тёмной темы
 // Пустой массив зависимостей, чтобы выполниться только при монтировании компонента


  // Функция для переключения темы
  // Меняем состояние темы// Если была тёмная тема// Убираем класс тёмной темы// Сохраняем светлую тему в localStorage
  // Если была светлая тема// Добавляем класс тёмной темы// Сохраняем тёмную тему в localStorage


export default function ThemeBtn() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  //  состояние темы при загрузке компонента
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  // переключение темы
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className={s.themeToggle}>
      <img src={sunIcon} alt="Солнце" className={s.iconSun} />
      <img src={moonIcon} alt="Луна" className={s.iconMoon} />
      <input
        type="checkbox"
        id="theme-switch"
        className={s.themeSwitch}
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-switch" className={s.btn}></label>
    </div>
  );
}