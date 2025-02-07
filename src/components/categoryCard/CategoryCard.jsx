import React from 'react'
import s from './CategoryCard.module.css'
export default function CategoryCard( { image, title}) {
  return (
    <div className={s.container}>
        <div className={s.categoryCard}>
            <img src={`localhost:3333${image}`} alt="" />
            <p>{title}</p>
        </div>
    </div>
  )
}
