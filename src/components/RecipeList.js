import React from 'react'
import "./RecipeList.css"
import {Link} from "react-router-dom"
import useTheme from "../hooks/useTheme"


const RecipeList = ({recipes}) => {

  const {mode} = useTheme()
    const recipeList = recipes.map(recipe => (
            <div key={recipe.id} className={`card ${mode}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to cook</p>
                <div>{recipe.method.slice(0, 100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Let's cook</Link>
            </div>
        )
    )
    if(recipes.length === 0){
      return <p>No recipes to load</p>
    }
  return (
    <div className={`recipe-list`}>
        {recipeList}
    </div>
  )
}

export default RecipeList