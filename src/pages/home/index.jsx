

import PokemonList from "../../components/card-list-pokemon"
import { Link } from 'react-router-dom'
import React from "react"
import PokemonCard from "../../components/card-pokemon"

function HomePokemon(){
        return(
            <React.Fragment>

            <PokemonList></PokemonList>

            </React.Fragment>
        )
}

export default HomePokemon