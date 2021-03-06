import React, {useRef, useEffect} from 'react';
import {connect} from "react-redux";
import {Link, Redirect} from 'react-router-dom';
import {logIn, clearMessages} from '../../store/actions/auth';

const Login = (props) => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.logIn({emailValue: emailRef.current.value, passwordValue: passwordRef.current.value})
    };

    useEffect(() => {
        props.clearMessages();
    }, []);

    if (props.authStatus) {
        return <Redirect to='/'/>;
    }

    return (
        <section className='sign-wrap'>
            <div className="sign-content">
                <form className='sign-content__form' action="POST" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    {props.errorMessage && <p className='sign-content__error'>{props.errorMessage}</p>}
                    <label htmlFor="sign-up-email">Email</label>
                    <input type="email" id='sign-up-email' ref={emailRef} required/>
                    <label htmlFor="sign-up-password">Password</label>
                    <input type="password" id='sign-up-password' ref={passwordRef} required/>
                    <button type='submit' onClick={handleSubmit}>Login</button>
                </form>
                <Link to='/forgot-password' className='sign-content__forgot-password'>Forgot password?</Link>
                <p className='sign-content__already'>Need an account? <Link to='/SignUp'>Sign up</Link></p>
            </div>
        </section>
    );
};

const mapStateToProps = (store) => {
    return {
        authStatus: store.firebase.auth.uid,
        errorMessage: store.auth.errorMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (data) => dispatch(logIn(data)),
        clearMessages: () => dispatch(clearMessages())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
