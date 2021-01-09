import React, {useState}  from 'react';
import {useAuth} from '../context/AuthContext';
import {Link, useHistory} from 'react-router-dom';

const Dashboard = (props) => {
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

    return (
        <>
            Dashboard
            {/*<h2>Profile</h2>*/}
            {/*{error && <p>error</p>}*/}
            {/*<p><strong>Email: </strong>{currentUser.email}</p>*/}
            {/*<button onClick={handleLogOut}>Log Out</button>*/}
            {/*<Link to='/update-profile'>Update profile</Link>*/}
        </>
    );
};

export default Dashboard;
