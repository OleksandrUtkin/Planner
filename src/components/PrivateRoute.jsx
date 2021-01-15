import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, authStatus,  ...rest}) => {
    return (
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
    // console.log(store);
    return {
        authStatus: store.firebase.auth.uid,
    }
};

export default connect(mapStateToProps, null)(PrivateRoute);
