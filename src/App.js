import React, { useEffect, useState } from 'react'
import Recipe from './Recipe.js'
import './App.css'

function App () {
  const YOUR_APP_ID = '35ef56dd'
  const YOUR_APP_KEY = '97b46772b82b90f479602f2f416f3f21'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    )
    const data = await response.json()
    setRecipes(data.hits)
    // console.log(data.hits.recipe,"-----");
  }

  useEffect(() => {
    getRecipes()
  }, [query])

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search) //here we get the finished text that the user writes in the input, instead for updating after every action the user types
    setSearch('')
  }

  recipes.forEach(e => {
    console.log(e)
  })

  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input
          className='search-field'
          type='text'
          value={search}
          onChange={updateSearch}
        />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      <div className='recipes-container'>
        {recipes.map((recipe,idx) => (
          <Recipe
            key={idx}
            allRecipeLabel={recipe.recipe}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            healthLabels={recipe.recipe.healthLabels}
            cuisineType={recipe.recipe.cuisineType}
          />
        ))}
      </div>
    </div>
  )
}

export default App
