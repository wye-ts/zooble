import React from "react";
import './LoginPage.css';

function LoginPage() {
    return (
        <form>
            <h1>Zooble!</h1>

            <div className='container'>
                <label for='email'>Email address</label>
                <input
                    type='email'
                    placeholder='Enter Username'
                    name='email'
                />

                <label for='psw'>Password</label>
                <input
                    type='password'
                    placeholder='Enter password'
                    name='psw'
                />
                <div className='btn-container'>
                    <button type='submit' className='submit-btn'>Login</button>
                </div>
                <p className='forgot-password'>
                    Forgot <a href='#'>password?</a>
                </p>

                <p className='create-account'>
                    Not registered? <a href='/SignUp-Page'>Create an account</a>
                </p>
            </div>
        </form>
    );
}

export default LoginPage;