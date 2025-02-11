import React from "react";
import s from './ThemeBtn.module.css';

// Путь к картинкам
import sunIcon from './assets/sun-icon.png';
import moonIcon from './assets/moon-icon.png';

export default function ThemeBtn() {
  return (
    <div className={s.themeToggle}>
      {/* Иконка Солнца (показана, когда выбран светлый режим) */}
      <img src={sunIcon} alt="Солнце" className={s.iconSun} />
      
      {/* Иконка Луны (показана, когда выбран темный режим) */}
      <img src={moonIcon} alt="Луна" className={s.iconMoon} />

      {/* Переключатель темы */}
      <input
        type="checkbox"
        id="theme-switch"
        className={s.themeSwitch}
      />
      <label htmlFor="theme-switch" className={s.btn}></label>
    </div>
  );
}