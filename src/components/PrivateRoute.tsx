import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {RootReducerType} from '../store/reducers/rootReducer';

const PrivateRoute: FC<any> = ({component: Component, authStatus,  ...rest}) => {
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

const mapStateToProps = (store: RootReducerType) => {
    return {
        authStatus: store.firebase.auth.uid,
    }
};

export default connect(mapStateToProps, null)(PrivateRoute);
