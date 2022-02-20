
import { useEffect } from 'react'
import { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'


function PokemonCard({pokemon}) {
    let [typeNames, updateTypenames] = useState([])

    useEffect(() => {
        pokemon.types.forEach((p) => {
            typeNames.push(p.type.name);
            updateTypenames([...typeNames])
            
        })
    },[])

  
    
  
   // console.log(pokemon.sprites.other.home.front_shiny)


  

    return (
        <div >          
            <Link to={`/details/${pokemon.id}`} state={pokemon}>
            <article className='card'>
                <header className='img-header'>
                    <img className='img-pokemon' src={pokemon.sprites.other.dream_world.front_default} />
                </header>
        
                <section className={` ${pokemon.types[0].type.name}`}>
                    <div>
                        <h1 className='pokeName'>{pokemon.name}</h1>
                    </div>
                    <div className='types-poke'>
                    {typeNames.map((type , i) =>(<div key={i} id={type}><p key={i} className='type'>{type.toUpperCase()}</p></div>))}
                    </div>
                    <footer className='footer-id'>
                        <p>{pokemon.id}</p>
                    </footer>
                </section>

            </article>
            </Link>

        </div>
    )
}

export default PokemonCard