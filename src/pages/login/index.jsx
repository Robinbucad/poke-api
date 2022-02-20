import './style.css'
import React from "react"
import HeaderRoute from "../header"
import { Link } from 'react-router-dom'




function LogIn() {


    return (
        
        <React.Fragment>
        
        <div className="container-login">
       
            <section className="left-login">
           

                <div className='login-options'>
                    <h1 className='login-title'>Login to Your Account</h1>
                    <h3 className='login-subtitle'>Login using social networks</h3>
                    <div className='div-icons'>
                        <i className="fa fa-facebook-official"></i> 
                        <i className="fa fa-google-plus-square"></i>
                        <i className="fa fa-linkedin-square"></i>
                    </div>
                </div>

                <div className='inputs-div'>
                    <input type='text' placeholder="Email" className='inputs-login'></input>
                    <input type='password' placeholder="Password" className='inputs-login'></input>
                    <button type="submit" className='btn-sign-in'>LOG IN</button>
                </div>

            </section>
            
            <section className="right-login">
                <div className='signup-options'>
                    <h1 className='title-signup'>New Here?</h1>
                    <p className='subtitle-signup'>Sign up and discover <br></br> all amount of Pokemons</p>
                   <Link to='/login/signUp'><button className='btn-signup'>Sign Up</button></Link>
                </div>

            </section>

        </div>

        </React.Fragment>

    )
}

export default LogIn