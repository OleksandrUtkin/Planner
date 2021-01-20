// import React, {useRef, useState} from 'react';
// import {useAuth} from "../../context/AuthContext";
// import {Link, useHistory} from 'react-router-dom';

// const UpdateProfile = (props) => {
    // const emailRef = useRef();
    // const passwordRef = useRef();
    // const passwordConfirmRef = useRef();
    // const {currentUser, updateEmail, updatePassword} = useAuth();
    // const [error, setError] = useState('');
    // const [loading, setLoading] = useState(false);
    // const history = useHistory();
    //
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //
    //     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //         return setError('Password do not match')
    //     }
    //
    //     const promises = [];
    //     setLoading(true);
    //     setError('');
    //
    //     if (emailRef.current.value !== currentUser.email) {
    //         promises.push(updateEmail(emailRef.current.value))
    //     }
    //     if (passwordRef.current.value) {
    //         promises.push(updatePassword(passwordRef.current.value))
    //     }
    //
    //     Promise.all(promises).then(() => {
    //         history.push('/')
    //     }).catch(() => {
    //         setError('Failed to update account CREDENTIAL_TOO_OLD_LOGIN_AGAIN')
    //     }).finally(() => {
    //         setLoading(false)
    //     });
    // };

    // return (
    //     <>
    //     </>
        // <section className='sign-wrap'>
        //     <div className="sign-content">
        //         <form className='sign-content__form' action="POST" onSubmit={handleSubmit}>
        //             <h2>Update Profile</h2>
        //             {error && <p className='sign-content__error'>{error}</p>}
        //             <label htmlFor="sign-up-email">Email</label>
        //             <input
        //                 type="email"
        //                 id='sign-up-email'
        //                 ref={emailRef}
        //                 required
        //                 defaultValue={currentUser.email}
        //             />
        //             <label htmlFor="sign-up-password">Password</label>
        //             <input
        //                 type="password"
        //                 id='sign-up-password'
        //                 ref={passwordRef}
        //                 placeholder='Leave blank to keep the same'
        //             />
        //             <label htmlFor="sign-up-password-confirm">Confirm Password</label>
        //             <input
        //                 type="password"
        //                 id='sign-up-password-confirm'
        //                 ref={passwordConfirmRef}
        //                 placeholder='Leave blank to keep the same'
        //             />
        //             <button disabled={loading} type='submit'>Update</button>
        //         </form>
        //         <Link to='/'>Cancel</Link>
        //     </div>
        // </section>
//     );
// };
//
// export default UpdateProfile;
