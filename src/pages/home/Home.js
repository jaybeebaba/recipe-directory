import "./Home.css"
import {useFetch} from "../../hooks/useFetch"

import React from 'react'
import RecipeList from "../../components/RecipeList";

const Home = () => {
  const url = "http://localhost:3000/recipes";

  const { data: recipes, error, isPending } = useFetch(url)

  return (
    <div className="home">
      {error && <p className="error">error</p>}
      {isPending && <p className="loading">loading...</p>}
      {
        recipes &&  <RecipeList recipes = {recipes}/>
      }
    </div>
  )
}

export default Home