// import React from "react";
// import styles from "./IconButton.module.css";
// const IconButton = ({ iconSrc, altText, onClick, isActive }) => {
//   return (
//     <button 
//       className={`${styles.iconButton} ${isActive ? styles.active : ""}`} 
//       onClick={onClick}
//     >
//       <img src={iconSrc} alt={altText} className={styles.iconImage} />
//     </button>
//   );
// };
// export default IconButton;

import React from "react";
import styles from "./IconButton.module.css";

const IconButton = ({ iconSrc, altText, onClick, isActive }) => {
  return (
    <button 
      className={`${styles.iconButton} ${isActive ? styles.active : ""}`} 
      onClick={onClick}
    >
      <img src={iconSrc} alt={altText} className={styles.iconImage} />
    </button>
  );
};

export default IconButton;
