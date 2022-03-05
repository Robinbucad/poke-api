
import React, { useEffect, useState } from "react"
import PokemonCard from "../../components/card-pokemon"
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom"
import './style.css'
import HeaderRoute from "../header"



 function DetailsPokemon() {

    let { id } = useParams('')
    console.log(id)
    

    let info = `https://pokeapi.co/api/v2/pokemon/${id}`
    let [pokemonImg, updatePokemonImg] = useState('')
    let [pokeName, updatePokeName] = useState('')
    let [setId, updateId] = useState('')
    let [typesNames, updateTypeNames] = useState([])
    let [setStat, updateStat] = useState([])
    let [baseStat, updateBaseStat] = useState([])
    let [height, setHeight] = useState('')
    let [abilities, updateAbilities] = useState ([])
    let [forms, updateForms] = useState([])

  
    const PrintDetails = (url) => {
        fetch(url)
            .then(r => r.json())
            .then(data => {
                data.types.forEach(t => {
                    typesNames.push(t.type.name)
                    updateTypeNames([...typesNames])
                })
                data.stats.forEach(s => {
                    setStat.push(s.stat.name)
                    updateStat([...setStat])
                })
                data.stats.forEach(bs => {
                    baseStat.push(bs.base_stat)
                    updateBaseStat([...baseStat])
                })
                data.abilities.forEach( a => {
                    abilities.push(a.ability.name)
                    updateAbilities([...abilities])
                })
                data.forms.forEach(f => {
                    forms.push(f.name)
                    updateForms([...forms])
                })
                console.log(data)

                updateId(data.id)
                updatePokemonImg(data.sprites.other.home.front_default)
                updatePokeName(data.name)
                setHeight(data.height / 10)
                
            })
    }


  



    useEffect(() => {
        PrintDetails(info)
    }, [id])




    return (
        <React.Fragment>
            <HeaderRoute></HeaderRoute>
        <div className="card-container-details">


            <div className="left-container">
                <div className="left-stats">
                    <p>ID</p>
                    <p>#{setId}</p>
                </div>
                <div className="left-stats">
                <p>Height</p>
                <p>{height}m</p>
                </div>
                <div className="left-stats ">
                <p>Abilities</p>
                <div className="abilities-container">
                {abilities.map(e => <div className="abilities-details"> {e}</div>)}
                </div>
                </div>
                <div className="left-stats">
                    <p>Type</p>
                    {typesNames.map((type , i) =>(<div id={type}><p key={i} className='type'>{type.toUpperCase()}</p></div>))}
                </div>
                <div className="left-stats">
                    <p>Forms</p>
                    {forms.map(f => f )}
                </div>
            </div>
        
            <div className="main-foto-detail">
                <h1 className="poke-name-details">{pokeName}</h1>
               <Link to={`/details/${setId}/${pokeName}`}> <img className="img-details" src={pokemonImg} /></Link>
                <h1>Click to see shiny</h1>
            </div>

            <div className="right-stats">
            <div className="stats-details">
               {setStat.map(stat =><div> <p>{stat.toUpperCase()}</p> </div>)}    
            </div>
            <div className="stats-details">
            {baseStat.map(baseStat =><div className="base-stat"> <p>{baseStat}</p> </div>)}
            </div>
            </div>

        </div>

        </React.Fragment>
    )
}

export default DetailsPokemon
