import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
import cactusImage from '././media/404.png';



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



