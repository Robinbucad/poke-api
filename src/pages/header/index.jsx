
import { Link } from 'react-router-dom'

function HeaderRoute() {

   
    return (
        <header className="main-header">
           <Link to='/'><h1 className='pokeName'>POKEDEX</h1></Link>
        </header>
    )
}

export default HeaderRoute