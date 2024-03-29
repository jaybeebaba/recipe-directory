import useTheme from "../hooks/useTheme"
import "./Navbar.css"
import { Link } from "react-router-dom"
import SearchBar from './SearchBar'



const Navbar = () => {

  const {color} = useTheme()

  return (
    <div className='navbar' style={{background: color}}>
      <nav>
        <Link to="/" className='brand' >
          <h1>My Recipes</h1>
        </Link>

        <SearchBar />

        <Link to="/create">
          Create Recipe
        </Link>
      </nav>
    </div>
  )
}

export default Navbar