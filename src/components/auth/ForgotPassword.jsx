import React, {useRef, useState} from 'react';
import {connect} from 'react-redux';
import '../../scss/components/auth.scss';
import {restorePasswordAction} from "../../store/actions/auth";
// import {useAuth} from "../../context/AuthContext";
import {Link} from 'react-router-dom';

const ForgotPassword = (props) => {
    const emailRef = useRef();
    // const {resetPassword} = useAuth();
    // const [error, setError] = useState('');
    // const [message, setMessage] = useState('');
    // const [loading, setLoading] = useState(false);
    //
    const handleSubmit = async (e) => {
        e.preventDefault();
        props.restorePasswordAction(emailRef.current.value)

        // try {
        //     setMessage('');
        //     setError('');
        //     setLoading(true);
        //     await resetPassword(emailRef.current.value);
        //     setMessage('Check your inbox for further instructions')
        // } catch {
        //     setError('Failed to reset password')
        // }
        // setLoading(false);
    };

    return (
        <section className='sign-wrap'>
            <div className="sign-content">
                <form className='sign-content__form' action="POST" onSubmit={handleSubmit}>
                    <h2>Password Reset</h2>
                    {props.errorMessage && <p className='sign-content__error'>{props.errorMessage}</p>}
                    {props.message && <p className="sign-content__success">{props.message}</p>}
                    <label htmlFor="sign-up-email">Email</label>
                    <input type="email" id='sign-up-email' ref={emailRef} required/>
                    <button type='submit'>Reset Password</button>
                </form>
                <Link to='/login'>Log In</Link>
                <p className='sign-content__already'>Need an account? <Link to='/SignUp'>Sign up</Link></p>
            </div>


            {/*<div className="sign-content">*/}
            {/*    <form className='sign-content__form' action="POST" onSubmit={handleSubmit}>*/}
            {/*        <h2>Password Reset</h2>*/}
            {/*        {error && <p className='sign-content__error'>{error}</p>}*/}
            {/*        {message && <p className="sign-content__success">{message}</p>}*/}
            {/*        <label htmlFor="sign-up-email">Email</label>*/}
            {/*        <input type="email" id='sign-up-email' ref={emailRef} required/>*/}
            {/*        <button disabled={loading} type='submit'>Reset Password</button>*/}
            {/*    </form>*/}
            {/*    <Link to='/login'>Log In</Link>*/}
            {/*    <p className='sign-content__already'>Need an account? <Link to='/SignUp'>Sign up</Link></p>*/}
            {/*</div>*/}
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
        restorePasswordAction: (emailValue) => dispatch(restorePasswordAction(emailValue))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
