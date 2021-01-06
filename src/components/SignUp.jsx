import React, {useRef, useState} from 'react';
import '../scss/components/auth.scss';
import {useAuth} from "../context/AuthContext";
import {Link, useHistory} from 'react-router-dom';

const SignUp = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signUp} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password do not match')
        }

        try {
            setError('');
            setLoading(true);
            await signUp(emailRef.current.value, passwordRef.current.value);
            console.log('error', error);
            history.push('/');
            console.log('error', error);
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false);
    };

    return (
        <section className='sign-wrap'>
            <div className="sign-content">
                <form className='sign-content__form' action="POST" onSubmit={handleSubmit}>
                    <h2>Sign UP</h2>
                    {error && <p className='sign-content__error'>{error}</p>}
                    <label htmlFor="sign-up-email">Email</label>
                    <input type="email" id='sign-up-email' ref={emailRef} required/>
                    <label htmlFor="sign-up-password">Password</label>
                    <input type="password" id='sign-up-password' ref={passwordRef} required/>
                    <label htmlFor="sign-up-password-confirm">Confirm Password</label>
                    <input type="password" id='sign-up-password-confirm' ref={passwordConfirmRef} required/>
                    <button disabled={loading} type='submit'>Sign Up</button>
                </form>
                <p className='sign-content__already'>Already have an account? <Link to='/login'>Sign in</Link></p>
            </div>
        </section>
    );
};

export default SignUp;
