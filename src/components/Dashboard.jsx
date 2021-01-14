import React  from 'react';
import Menu from "./menu/Menu";
import {connect} from 'react-redux';
import {firestoreConnect} from "react-redux-firebase";
import {compose} from 'redux';

const Dashboard = (props) => {
    return (
        <>
            <header>
                <Menu/>
            </header>
            <h2>Dashboard</h2>
            <h3>{props.name}</h3>
        </>
    );
};

const mapStateToProps = (store) => {
    console.log(store);
    return {
        name: store.auth.name
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'users'}
    ])
)(Dashboard);
