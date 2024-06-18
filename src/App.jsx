import './App.css'
import useApi from './services/useApi';
import { API_URL_POKEMON } from "./config/urls"
import PokemonCard from './components/PokemonCard';

function App() {
  const { data } = useApi(API_URL_POKEMON);
  console.log(data);
  return (
    <>
      <div>
        <h1>Lista de pokemon</h1>
        <ul>
          {data?.results?.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon}/>
          ))}
          
        </ul>
        </div>
        
    </>
  )
}

export default App
