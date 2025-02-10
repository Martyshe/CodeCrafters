import React from 'react'
import s from './CategoryCard.module.css'
export default function CategoryCard( { image, title}) {
  return (
    
        <div className={s.categoryCard}>
        <img src={`http://localhost:3333${image}`} alt={title}></img>
            <p>{title}</p>
        </div>

  )
}
