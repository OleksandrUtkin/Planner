import React from 'react';
import '../../scss/components/menu.scss';
import {connect} from "react-redux";
import {logOut} from "../../store/actions/auth";

const Menu = (props) => {

    const handleLogOut = () => {
        props.logOut(false);
    };

    return (
        <div className='menu menu_open'>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    );
};

const mapStateToProps = (store) => {
    return {
        authStatus: store.auth.authStatus
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: (authStatus) => dispatch(logOut(authStatus))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
