import React, {FC} from 'react';
import SignUp from "./auth/SignUp";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from "./Main";
import Login from './auth/Login';
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./auth/ForgotPassword";
import ProfileSettings from "./ProfileSettings";
import Page404 from "./Page404";
// import {AuthProvider} from "../context/AuthContext";
// import UpdateProfile from "./auth/UpdateProfile";


const App = () => {
  return (
    <>
        <BrowserRouter>
            <Switch>
                <PrivateRoute exact path='/' component={Main}/>
                {/*<PrivateRoute exact path='/update-profile' component={UpdateProfile}/>*/}
                <PrivateRoute exact path='/profile-settings' component={ProfileSettings}/>
                <Route exact path='/signUp' component={SignUp}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/forgot-password' component={ForgotPassword}/>
                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    </>
  );
};

export default App;
