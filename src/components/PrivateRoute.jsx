import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
// import {useAuth} from '../context/AuthContext';

const PrivateRoute = ({component: Component, authStatus: authStatus,  ...rest}) => {
    // console.log(authorized);
    // const {currentUser} = useAuth();
    // console.log({...rest})

    return (
        // <>
        // </>
        <Route
            {...rest}
            render={props => {
                return authStatus ? <Component {...props}/> : <Redirect to='/login'/>
            }}
        >
        </Route>
    );
};

const mapStateToProps = (store) => {
    return {
        authStatus: store.auth.authStatus
    }
};

export default connect(mapStateToProps, null)(PrivateRoute);
