import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
import cactusImage from '././media/404.png';

// Импортируем необходимые зависимости
// Для навигации между страницами
// Подключаем стили для компонента
// Импорт изображения для страницы 404

//Создаю основной контейнер страницы
//Создаю контейнер с содержимым 
// Устанавливаю изображение для страницы 404
// Добавляю описание изображения для доступности
// Применяю стили к изображению
//Добавляю заголовок с текстом ошибки
//Добавляю сообщение об ошибке для пользователя
//Добавляю ссылка для возврата на главную страницу

// Экспортируем компонент для использования в других частях приложения

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
    
        <img 
          src={cactusImage} 
          alt="Cactus" 
          className={styles.image}
        />
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.message}>We’re sorry, the page you requested could not be found. Please go back to the homepage.</p>
        <Link to="/" className={styles.button}>Go Home</Link>
      </div>
    </div>
  );
};

export default NotFound;



