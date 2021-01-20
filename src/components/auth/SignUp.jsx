import React, {useRef, useState, useEffect} from 'react';
import {connect} from "react-redux";
import {Link, Redirect} from 'react-router-dom';
import signUp, {clearMessages} from "../../store/actions/auth";
import DateOfBirth from "./DateOfBirth";

const SignUp = (props) => {
    const [birthDaySelect, setBirthDaySelect] = useState(false);
    const [monthSelect, setMonthSelect] = useState(false);
    const [yearSelect, setYearSelect] = useState(false);
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.signUp({
            nameValue: nameRef.current.value,
            emailValue: emailRef.current.value,
            passwordValue: passwordRef.current.value,
            confirmPasswordValue: passwordConfirmRef.current.value,
            dayOfBirth: birthDaySelect,
            monthOfBirth: monthSelect,
            yearOfBirth: yearSelect
        });
    };

    useEffect(() => {
        props.clearMessages();
    }, []);

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
                    <DateOfBirth
                        birthDaySelect={birthDaySelect}
                        setBirthDaySelect={setBirthDaySelect}
                        monthSelect={monthSelect}
                        setMonthSelect={setMonthSelect}
                        yearSelect={yearSelect}
                        setYearSelect={setYearSelect}
                    />
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
        signUp: (data) => dispatch(signUp(data)),
        clearMessages: () => dispatch(clearMessages())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
