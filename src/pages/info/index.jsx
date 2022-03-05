import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import HeaderRoute from "../header"
import './style.css'

function InfoPage() {

    let {id} = useParams('')
    let {species} = useParams('')

    console.log(species)
        
    let info =`https://pokeapi.co/api/v2/pokemon/${id}/`
    let [imgPoke, updateImgPoke] = useState([])
    let [namePoke, updateName] = useState('')

    const fetchImg = (url) => {
        fetch(url)
            .then(r=> r.json())
            .then( data=> {
                updateImgPoke(data.sprites.other.home.front_shiny)
                updateName(data.name)
            })
    }

    useEffect(() => {
        fetchImg(info)
    })

    console.log(imgPoke)

    return (
        <React.Fragment>
            <HeaderRoute></HeaderRoute>
            <div className="shiny-container">
                <article className="card-shiny-pokemon">
                    <h1 className="shiny-title">{`${namePoke.toUpperCase()} SHINY`}</h1>
                    <div>
                    <img className="img-shiny-pokemon" src={imgPoke}></img>
                    </div>
                </article>
            </div>
            
        </React.Fragment>
    )
}

export default InfoPage


