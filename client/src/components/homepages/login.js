import React from 'react';
import Register from './register';
import {Link} from 'react-router-dom';
import './login.css';

const Login = () => {
    return (
    <>
        <div className='login'>
            <div className='main-container'>
                <h3>Login for admin</h3>
            </div>
            <div className='login-center'>
                <form>
                    <p>you edited it</p>
                    
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='import email...' name='email' required />

                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='import password...' name='password' required />

                    <div className='login-btn'>
                        <button type='submit'>Login</button>
                        <Link to='/'><button>Back to home</button></Link>
                    </div>
                </form>
            </div>
        </div>

        {/* register */}
        <Register />

    </>
    );
}

export default Login;
