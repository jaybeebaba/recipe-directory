import "./Home.css"
// import {useFetch} from "../../hooks/useFetch"
import { projectFirestore } from "../../firebase/config";
import React, { useEffect, useState } from 'react'
import RecipeList from "../../components/RecipeList";

const Home = () => {
  const [recipes, setRecipes] = useState([])
  const [error, setError] = useState("")
  const [isPending, setIspending] = useState("")


  useEffect(()=>{
    setIspending(true)
    projectFirestore.collection("recipes").get()
    .then(snapshot =>{
      if(snapshot.empty){
        setError("No recipes to fetch")
        setIspending(false)
      }else{
          const results = []
          snapshot.docs.forEach(doc =>{
            results.push({ id: doc.id, ...doc.data()})
          })
          setRecipes(results)
          setIspending(false)
        }
      }).catch(err =>{
        setError(err.message)
        setIspending(false)
      })
  }, [])
 

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">loading...</p>}
      {
        recipes &&  <RecipeList recipes = {recipes}/>
      }
    </div>
  )
}

export default Home