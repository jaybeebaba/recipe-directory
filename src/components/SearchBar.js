import React, { useState } from 'react'
import {useHistory} from "react-router-dom"
import "./SearchBar.css"

const SearchBar = () => {
    const [term, setTerm] = useState("")
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        history.push(`/search?q=${term}`)
        setTerm("")
    }
  return (
    <div className='searchbar'>
        <form onSubmit={handleSubmit}>
            <label htmlFor='search'>Search:</label>
                <input onChange = {(e) => setTerm(e.target.value)} value= {term} required/>
        </form>
    </div>
  )
}

export default SearchBar