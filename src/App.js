
import './App.css';
import PokemonList from './components/card-list-pokemon';
import PokemonCard from './components/card-pokemon';
import Header from './components/header';
import HomePokemon from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailsPokemon from './pages/details';
import InfoPage from './pages/info';
import LogIn from './pages/login';
import SignUp from './pages/signup';
import ThankYou from './pages/thankYou';
import PageError from './pages/page404';


function App() {

  
  return (
    <div className="App">

      
      <BrowserRouter>
       
        <Routes>
          <Route path='/' element={<HomePokemon></HomePokemon>}></Route>
          <Route path='/details/:id' element={<DetailsPokemon></DetailsPokemon>}></Route>
          <Route path='/details/:id/:img' element={<InfoPage></InfoPage>}></Route>
          <Route path='/login' element={<LogIn></LogIn>}></Route>
          <Route path='/login/signUp' element={<SignUp></SignUp>}></Route>
          <Route path='/login/signUp/thanks' element={<ThankYou></ThankYou>}></Route>
          <Route path='/*' element={<PageError></PageError>}></Route>
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
