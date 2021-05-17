import React, { useEffect, useState } from 'react'


const PokemonAPI = props => {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => 
        fetch(" https://pokeapi.co/api/v2/pokemon/?limit=807")
            .then(response => response.json())
            .then(response => setPokemon( response.results))
            .catch(err => console.log(err)
            ,[])
        )
        return (
            <form>
                <button>fetch pokemon</button>
                {
                    pokemon.map((pokemon,i)=> {
                        return (
                <ul>
                    <li key = {i}>{pokemon.name}</li>
                </ul>
                        )})
                        }
            </form>
            )
}


export default PokemonAPI