import React, {useState}  from 'react';
import {connect} from "react-redux";
import {useHistory, Redirect} from 'react-router-dom';
// import {useAuth} from '../context/AuthContext';
// import {Link, useHistory} from 'react-router-dom';

import Menu from "./menu/Menu";

const Dashboard = (props) => {
    const history = useHistory();

    // !props.authorized && history.push('/signUp');


    // const [error, setError] = useState('');
    // const {currentUser, logOut} = useAuth();
    // const history = useHistory();
    //
    // const handleLogOut = async () => {
    //     setError('');
    //     try {
    //         await logOut();
    //         history.push('/')
    //     } catch {
    //         setError('Failed to log out')
    //     }
    // };


    // if (!props.authorized) {
    //     return <Redirect to='/'/>
    // }
    return (
        <>
            <header>
                <Menu/>
            </header>
            <h2>Dashboard</h2>
            {/*<h2>Profile</h2>*/}
            {/*{error && <p>error</p>}*/}
            {/*<p><strong>Email: </strong>{currentUser.email}</p>*/}
            {/*<button onClick={handleLogOut}>Log Out</button>*/}
            {/*<Link to='/update-profile'>Update profile</Link>*/}
        </>
    );
};

const mapStateToProps = store => {
    return {
        authStatus: store.auth.authStatus
    }
};

export default connect(mapStateToProps, null)(Dashboard);
