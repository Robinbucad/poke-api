
import { useState } from 'react'
import './style.css'


function SignUp() {

    const [password, setPassword] = useState('')
    const [confirmPassword, setPasswordConfirmed] = useState('')


    return (
        
        <form name='form' method={password === confirmPassword ? 'POST' : ''} action={password === confirmPassword ? 'https://formsubmit.co/robin.bucad6@gmail.com' : ' ' } encType="multipart/form-data" className='container'>

        <div className='input-div'>
            <div className='inputs-person-name'>
                <input name='name' className='input-signUp' type='text' placeholder='Name' required></input>
                <input name='lastName' className='input-signUp' type='text' placeholder='Last Name' required></input>
            </div>

            <div className='input-email-number'>
                <input name='number' className='input-signUp' type='number' placeholder='Number' required></input>
                <input name='email' className='input-signUp' type='email' placeholder='Email' required></input>
                <input value={password} onChange={e => setPassword(e.target.value)}  name='pass' className='input-signUp' type='password' placeholder='Password' required></input>
                <input value={confirmPassword} onChange={e => setPasswordConfirmed(e.target.value)} name='confirmPass' className='input-signUp' type='password' placeholder='Repeat password' required></input>
            </div>
            <div className='birthday'>
                <p>Birthday</p>
                <input name='birthday' min='1960-01-01' max='2022-02-20' className='input-signUp' type='date' className='input-birthday' required></input>
            </div>
            <input type='hidden' name='_next' value='http://localhost:3000/login/signUp/thanks'></input>
            <div className='input-gener-container' >
                <div className='gender-container'>
                    <div className='div-gender'>
                        <p>Female</p>
                        <input name='gender' type='radio'required></input>
                    </div>
                    <div className='div-gender'>
                        <p>Male</p>
                        <input name='gender' type='radio' required></input>
                    </div>
                    <div className='div-gender'>
                        <p>Other</p>
                        <input name='gender' type='radio' required></input>
                    </div>
                </div>
            </div>

            <div className='politics-div'>
                <p>By clicking Sign Up,you to our Terms. Learn how we collect, use and share your data in our Data Policy and how we use cookies and similar technology
                    in our Cookies Policy. You may receive SMS notifications from us and can oop out any time.
                </p>
            </div>

            <footer>
                <button onClick={e => password === confirmPassword ? '' : alert('Las contraseñas deben ser iguales')} name='submit' type='submit'  className='btn-signUp'>Sign Up</button>
            </footer>
            


        </div>

        
    </form> 


    )

}

export default SignUp
