import './App.css';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import ThemeSelector from './components/ThemeSelector';
import useTheme from './hooks/useTheme';

function App() {
  const {mode}=useTheme();
  

  return (
    <div className={`App ${mode}`}>
      <Navbar />
      <ThemeSelector />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/create" component={Create} />
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/recipes/:id">
          <Recipe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
