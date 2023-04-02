import "./Recipe.css"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

import React from 'react'
import { projectFirestore } from "../../firebase/config"
const Recipe = () => {
  const {id} = useParams()

  const [recipe, setRecipe] = useState(null)
  const [error, setError] = useState("")
  const [isPending, setIspending] = useState(false)

  const handleClick = () =>{
        projectFirestore.collection("recipes").doc(id).update({
          title: "Plantain Fritata"
        })
  }

  useEffect(()=>{
      setIspending(true)
      const unsub = projectFirestore.collection("recipes").doc(id)
        .onSnapshot(doc => {
          if(doc.exists){
            setIspending(false)
            setRecipe(doc.data())
          }else{
            setError("This document does not exist")
            setIspending(false)
          }
        }, (err) => setError(err.message))

        return () => unsub()
        
  }, [id])

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {
        recipe && (
          <>
            <h2 className="page-title">{recipe.title}</h2>
            <p>Takes {recipe.cookingTime} to cook</p>
            <ul>
              {recipe.ingredients.map( ingredient => <li key={ingredient}>{ingredient}</li>)}
            </ul>
            <p className="method">{recipe.method}</p>
            <button onClick={handleClick}>Update me</button>
            
          </>
        )
      }
    </div>
  )
}

export default Recipe