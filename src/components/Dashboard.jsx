import React  from 'react';

import {connect} from 'react-redux';
// import {firestoreConnect} from "react-redux-firebase";
// import {compose} from 'redux';
import Header from "./layout/Header";

const Dashboard = (props) => {
    return (
        <>
            <Header/>
            <h2>Dashboard</h2>
            <h3>{props.name}</h3>
        </>
    );
};

const mapStateToProps = (store) => {
    return {
        name: store.firebase.profile.userName
    }
};

export default connect(mapStateToProps)(Dashboard)
