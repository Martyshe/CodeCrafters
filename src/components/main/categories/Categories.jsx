import React, { useEffect, useState } from 'react'
import s from './Categories.module.css'

export default function Categories() {
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('http://localhost:3333/categories/all') 
          .then(response => response.json()) 
          .then(data => setCategory(data)) 
          .catch(error => console.error('Ошибка:', error));
      }, []);
  return (
    <div className='categoriesSection'>
        <div className={s.categoriesSectionHeader}>
        <h2>Categories</h2>
        <button id='allCategories'>All categories</button>
        </div>
        
        <div className='categoriesCards'>
            {category.map( category => {
                return (
                <div key={category.id}>
                <img src={category.image}></img>
                <p>{category.title}</p>
                </div>
                )
            })}
        </div>
    </div>
  )
}
