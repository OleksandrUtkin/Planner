import React, {useRef} from 'react';
import '../../scss/components/auth.scss';
import {connect} from "react-redux";
import {Link, Redirect} from 'react-router-dom';
import sendLoginData from "../../store/actions/auth";

const SignUp = (props) => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.sendLoginData({
            nameValue: nameRef.current.value,
            emailValue: emailRef.current.value,
            passwordValue: passwordRef.current.value,
            confirmPasswordValue: passwordConfirmRef.current.value
        });
    };

    if (props.authStatus) {
        return <Redirect to='/'/>
    }

    return (
        <section className='sign-wrap'>
            <div className="sign-content">
                <form className='sign-content__form' action="POST" onSubmit={handleSubmit}>
                    <h2>Sign UP</h2>
                    {props.errorMessage && <p className='sign-content__error'>{props.errorMessage}</p>}
                    <label htmlFor="sign-up-userName">Enter your name</label>
                    <input id='sign-up-userName' type="text" ref={nameRef} required/>
                    <label htmlFor="sign-up-email">Email</label>
                    <input type="email" id='sign-up-email' ref={emailRef} required/>
                    <label htmlFor="sign-up-password">Password</label>
                    <input type="password" id='sign-up-password' ref={passwordRef} required/>
                    <label htmlFor="sign-up-password-confirm">Confirm Password</label>
                    <input type="password" id='sign-up-password-confirm' ref={passwordConfirmRef} required/>
                    <button type='submit'>Sign Up</button>
                </form>
                <p className='sign-content__already'>Already have an account? <Link to='/login'>Sign in</Link></p>
            </div>
        </section>
    );
};

const mapStateToProps = store => {
    return {
        errorMessage: store.auth.errorMessage,
        authStatus: store.firebase.auth.uid
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendLoginData: (data) => dispatch(sendLoginData(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
