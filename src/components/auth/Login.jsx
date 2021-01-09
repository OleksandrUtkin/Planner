import React, {useRef, useState} from 'react';
import '../../scss/components/auth.scss';
// import {useAuth} from "../../context/AuthContext";
import {connect} from "react-redux";
import {Link, useHistory} from 'react-router-dom';
import sendLoginData from "../../store/actions/signUp";

const Login = (props) => {
    const [inputNameValue, setInputNameValue] = useState('');
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    // const {login} = useAuth();
    // const [error, setError] = useState('');
    // const [loading, setLoading] = useState(false);
    // const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // try {
        //     setError('');
        //     setLoading(true);
        //     await login(emailRef.current.value, passwordRef.current.value);
        //     history.push('/')
        // } catch {
        //     setError('Failed to log in')
        // }
        // setLoading(false);
    };

    return (
        <section className='sign-wrap'>
            <div className="sign-content">
                <form className='sign-content__form' action="POST" onSubmit={handleSubmit}>
                    <h2>Log in</h2>
                    <p className='sign-content__error'></p>
                    <label htmlFor="sign-up-email">Email</label>
                    <input type="email" id='sign-up-email' ref={emailRef} required/>
                    <label htmlFor="sign-up-password">Password</label>
                    <input type="password" id='sign-up-password' ref={passwordRef} required/>
                    <button type='submit'>Log In</button>
                </form>
                <Link to='/forgot-password'>Forgot password?</Link>
                <p className='sign-content__already'>Need an account? <Link to='/SignUp'>Sign up</Link></p>
            </div>
        </section>

        // <section className='sign-wrap'>
        //     <div className="sign-content">
        //         <form className='sign-content__form' action="POST" onSubmit={handleSubmit}>
        //             <h2>Log in</h2>
        //             {error && <p className='sign-content__error'>{error}</p>}
        //             <label htmlFor="sign-up-email">Email</label>
        //             <input type="email" id='sign-up-email' ref={emailRef} required/>
        //             <label htmlFor="sign-up-password">Password</label>
        //             <input type="password" id='sign-up-password' ref={passwordRef} required/>
        //             <button disabled={loading} type='submit'>Log In</button>
        //         </form>
        //         <Link to='/forgot-password'>Forgot password?</Link>
        //         <p className='sign-content__already'>Need an account? <Link to='/SignUp'>Sign up</Link></p>
        //     </div>
        // </section>
    );
};

export default Login;