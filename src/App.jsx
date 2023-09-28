import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [pokemonData,setPokemonData]=useState(null);
const[loading,setLoading]=useState(true);
const[error,setError]=useState(null);

useEffect(()=>{
  async function fetchData(){
    try{
      const response=await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      if(!response.ok){
        throw new Error('network response was not ok');
      }
      const data=await response.json();
      setPokemonData(data);
      setLoading(false);
    }catch(err){
      setError(err);
      setLoading(false);
    }
  }
  fetchData();
},[])
if(loading){
  return <p>loading...</p>
}
if(error){
  return <p>Error:{error.message}</p>
}
  return (
    <div className='App'>
      <h1>Pokemon Details</h1>
      {pokemonData&&(
        <div>
          <h2>Nane:{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <img src={pokemonData.sprites.back_default} alt={pokemonData.name} />
        </div>
      )}
    </div>
  )
}

export default App
