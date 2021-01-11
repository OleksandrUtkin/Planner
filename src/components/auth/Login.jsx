import React, {useRef} from 'react';
import '../../scss/components/auth.scss';
import {connect} from "react-redux";
import {Link, useHistory} from 'react-router-dom';
import {logIn} from '../../store/actions/auth';

const Login = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.logIn({emailValue: emailRef.current.value, passwordValue: passwordRef.current.value})
    };

    props.authStatus && history.push('/');

    return (
        <section className='sign-wrap'>
            <div className="sign-content">
                <form className='sign-content__form' action="POST" onSubmit={handleSubmit}>
                    <h2>Log in</h2>
                    {props.errorMessage && <p className='sign-content__error'>{props.errorMessage}</p>}
                    <label htmlFor="sign-up-email">Email</label>
                    <input type="email" id='sign-up-email' ref={emailRef} required/>
                    <label htmlFor="sign-up-password">Password</label>
                    <input type="password" id='sign-up-password' ref={passwordRef} required/>
                    <button type='submit' onClick={handleSubmit}>Log In</button>
                </form>
                <Link to='/forgot-password'>Forgot password?</Link>
                <p className='sign-content__already'>Need an account? <Link to='/SignUp'>Sign up</Link></p>
            </div>
        </section>
    );
};

const mapStateToProps = (store) => {
    return {
        authStatus: store.auth.authStatus,
        errorMessage: store.auth.errorMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (data) => dispatch(logIn(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
