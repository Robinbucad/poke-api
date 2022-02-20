
import { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Header(props) {

   
    return (
        <header className="main-header">
           <Link to='/'><h1 className='pokeName'>POKEDEX</h1></Link>
            <div>
                <input onChange={props.handleChange} placeholder='Search pokemon...' className='input-search' type='text'></input>
                <div className='fa-search-box'>
                <i className="fa fa-search"></i>
                </div>
            </div>
            <div  className='log-in-header-box'>
            <Link to='/login'> <button className='log-in-header'>Log In</button></Link>
            </div>
        </header>
    )
}

export default Header