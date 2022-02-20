
import React, { useEffect, useState } from "react"
import PokemonCard from "../../components/card-pokemon"
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom"
import './style.css'
import HeaderRoute from "../header"



function DetailsPokemon() {

    let pokemon = useLocation();


    let x = pokemon.state
    console.log(x)


    let [typeNames, updateTypenames] = useState([])

    useEffect(() => {
        x.types.forEach((p) => {
            typeNames.push(p.type.name);
            updateTypenames([...typeNames])
            
        })
    },[])


    

    let [setStat, updateStat] = useState([])
    let [baseStat, updateBaseStat] = useState([])

    useEffect(() => {
        x.stats.forEach(s => {
            setStat.push(s.stat.name)
            updateStat([...setStat])
            console.log(s.base_stat)
            baseStat.push(s.base_stat)
            updateBaseStat([...baseStat])
        })
    },[])

    return (
        <React.Fragment>
            <HeaderRoute></HeaderRoute>
        <div className="card-container-details">


            <div className="left-container">
                <div className="left-stats">
                    <p>ID</p>
                    <p>#{x.id}</p>
                </div>
                <div className="left-stats">
                <p>Height</p>
                <p>{x.height/100}m</p>
                </div>
                <div className="left-stats ">
                <p>Abilities</p>
                <div className="abilities-container">
                {x.abilities.map((e,i) =><div key={i} className="abilities-details"> <p>{e.ability.name.toUpperCase()}</p> </div>)}
                </div>
                </div>
                <div className="left-stats">
                    <p>Type</p>
                    {typeNames.map((type , i) =>(<div id={type}><p key={i} className='type'>{type.toUpperCase()}</p></div>))}
                </div>
                <div className="left-stats">
                    <p>Forms</p>
                    {x.forms.map( e => e.name)}
                </div>
            </div>
        
            <div className="main-foto-detail">
                <h1 className="poke-name-details">{x.name.toUpperCase()}</h1>
               <Link to={`/details/${x.id}/${x.name}`} state={x}> <img className="img-details" src={x.sprites.other.home.front_default} /></Link>
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