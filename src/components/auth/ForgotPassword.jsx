import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import {restorePasswordAction, clearMessages} from "../../store/actions/auth";
import {Link} from 'react-router-dom';

const ForgotPassword = (props) => {
    const emailRef = useRef(null);

    useEffect(() => {
        props.clearMessages();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        props.restorePasswordAction(emailRef.current.value)
    };

    return (
        <section className='sign-wrap'>
            <div className="sign-content">
                <form className='sign-content__form' action="POST" onSubmit={handleSubmit}>
                    <h2>Password Reset</h2>
                    {props.errorMessage && <p className='sign-content__error'>{props.errorMessage}</p>}
                    {props.message && <p className="sign-content__success-message">{props.message}</p>}
                    <label htmlFor="sign-up-email">Email</label>
                    <input type="email" id='sign-up-email' ref={emailRef} required/>
                    <button type='submit'>Reset Password</button>
                </form>
                <Link to='/login' className='sign-content__forgot-password'>Log In</Link>
                <p className='sign-content__already'>Need an account? <Link to='/SignUp'>Sign up</Link></p>
            </div>
        </section>
    );
};

const mapStateToProps = (store) => {
    return {
        errorMessage: store.auth.errorMessage,
        message: store.auth.message
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        restorePasswordAction: (emailValue) => dispatch(restorePasswordAction(emailValue)),
        clearMessages: () => dispatch(clearMessages())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
