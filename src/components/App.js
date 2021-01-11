import React from 'react';
import SignUp from "./auth/SignUp";
// import {AuthProvider} from "../context/AuthContext";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from "./Dashboard";
import Login from './auth/Login';
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./auth/ForgotPassword";
import UpdateProfile from "./auth/UpdateProfile";

function App() {
  return (
    <>
        <BrowserRouter>
                <Switch>
                    <PrivateRoute exact path='/' component={Dashboard}/>
                    <PrivateRoute exact path='/update-profile' component={UpdateProfile}/>
                    <Route exact path='/signUp' component={SignUp}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/forgot-password' component={ForgotPassword}/>
                </Switch>
        </BrowserRouter>
    </>
  );
}

export default App;
