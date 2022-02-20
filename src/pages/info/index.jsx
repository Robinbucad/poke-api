import React from "react"
import { useLocation } from "react-router-dom"
import HeaderRoute from "../header"
import './style.css'

function InfoPage() {

    let x = useLocation()


    let image = x.state
    console.log(image)

    return (
        <React.Fragment>
            <HeaderRoute></HeaderRoute>

            <div className="shiny-container">
                <article className="card-shiny-pokemon">
                    <h1 className="shiny-title">{`${image.name.toUpperCase()} SHINY`}</h1>
                    <div>
                    <img className="img-shiny-pokemon" src={image.sprites.other.home.front_shiny}></img>
                    </div>
                </article>
            </div>
        </React.Fragment>
    )
}

export default InfoPage