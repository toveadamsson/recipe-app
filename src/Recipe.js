import React from 'react'
import style from './recipe.module.css'
const Recipe = ({ title, image, ingredients, healthLabels,cuisineType }) => {

  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
    
      <div>
        <img className={style.img} src={image} alt='' />
      </div>
      <ol className={style.list}>
        {ingredients.map((ingredient,idx) => (

          <div key={idx}>
            <li>{ingredient.text}</li>

          </div>
        ))}
      </ol>
    </div>
  )
}

export default Recipe
