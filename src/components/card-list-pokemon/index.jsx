import React, { useEffect, useState } from "react"
import PokemonCard from "../card-pokemon"
import './style.css'
import Header from "../header"


function PokemonList() {


    const fetchPokemons = (url) => {
        
        fetch(url)
            .then(r => r.json())
            .then(data => {
                setInfo(data)
                data.results.forEach(v => {
                    fetch(v.url)
                        .then(r => r.json())
                        .then(data => {
                          
                            updatePokemon((pokemon) => [...pokemon, data].sort((c,o) => c.id > o.id ? 1 : -1))
                            updatefilter((pokemon) => [...pokemon, data].sort((c,o) => c.id > o.id ? 1 : -1) )
                            })
                })
            })
    }


    let [info, setInfo] = useState(`https://pokeapi.co/api/v2/pokemon/`)
    let [pokemon, updatePokemon] = useState([])
    let [filter, updatefilter] = useState('')
 

    let next = () => {
        updatefilter([])
        fetchPokemons(info.next)
   
    }

   

    let previous = () => {
        updatefilter('')
        fetchPokemons(info.previous)
    }

    useEffect(() => {
        fetchPokemons(info)
        Promise.allSettled(info)
    }, [])


    const handleChange = (c) => {
        const filterPoke = pokemon.filter(p => p.name.toLowerCase().includes(c.target.value));
        updatefilter(filterPoke)
    }

    return (
        <React.Fragment>
            <Header handleChange={handleChange} ></Header>
            <div className="card-container">
                {filter.length === 0 ? <h1>Loading...</h1> : filter.map((p, i) => <PokemonCard key={i} pokemon={p} ></PokemonCard>)}
            </div>
            <footer className="footer-btn">
                { previous = info.previous ?   <button className="btn-load" onClick={previous}>PreviousPage</button> : null}
                {next = info.next ? <button className="btn-load" onClick={next}>NextPage</button> : null}
            </footer>

        </React.Fragment>
    )

}

export default PokemonList