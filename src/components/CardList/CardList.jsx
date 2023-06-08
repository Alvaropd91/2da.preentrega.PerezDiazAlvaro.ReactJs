import  { useEffect, useState } from 'react'
import './CardList.css'
import axios from 'axios';

import Card from '../Card/Card.jsx'

export const CardList = () => {

    const [pokemons, setPokemon] = useState([])

    

    useEffect(() => {
        fetch("https://api.github.com/users")
        .then((response) => response.json())
        .then((data) => setPokemon(data))
    }, [])
    
  return (
    <div>
        <h1>CardList</h1>
        {pokemons.map((pok) => {
            return(
                <div key={pok.id}>
                    <Card data={pok}/>
                </div>
            ) 
        })}

    </div>
  )
}

export default CardList
