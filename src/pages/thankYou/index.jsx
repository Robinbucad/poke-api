
import React from "react"
import { useEffect } from "react"
import HomePokemon from "../home"
import { useState } from 'react'
import './style.css'
import ImgThank from '../../assets/img/image-redirect.gif'


function ThankYou() {

    function vuelta() {
        setTimeout(() => {
            window.location = 'http://localhost:3000/'
        }, 5500)

    }

    let [counter, updateCounter] = useState(4)

    let intervalId = useEffect(() => {
        setInterval(() => {
            updateCounter(counter--)
            console.log('gol')
        },1000)
        
        return () => clearInterval(intervalId)
    },[])


    return (
        <main className="main-thanks">
        <article className='container-thanks'>

            <div className="div-thanks">
                <img className="img-thank" src={ImgThank}/>
                <h1 className="thankyou-for-register">Gracias por registrarte</h1>
                <p>Seras redireccionado a la pagina principal en  </p>
                <p className="counter-page">{counter}</p>
            </div>

            {vuelta()}

        </article>
        </main>
     

    )
}

export default ThankYou