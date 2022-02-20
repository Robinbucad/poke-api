import pokeball from '../../assets/img/404poke.png'
import './style.css'
import { Link } from 'react-router-dom'
import pikachu from '../../assets/img/pikachu-error.gif'

function PageError() {
    return (

        <div className='page-error-container'>
            <header>
                <h1 className='sorry-error'>SORRY</h1>
            </header>
            <section className='error-container'>

                <h1 className='number-error'>4</h1>
                <img className='pokeball-error' src={pokeball}></img>
                <h1 className='number-error'>4</h1>

            </section>
            <div className='shadow-div-error'></div>
            <section className='footer-error'>
                <h1 className='not-found-msg'>Page not found</h1>
               <Link to='/'><button className='btn-error-page'>BACK HOME</button></Link>
               <img className='pika-gif' src={pikachu}></img>
            </section>
            
        </div>
    )
}

export default PageError