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
            {/*<AuthProvider>*/}
                <Switch>
                    <PrivateRoute exact path='/' component={Dashboard}/>
                    <PrivateRoute exact path='/update-profile' component={UpdateProfile}/>
                    <Route path='/signUp' component={SignUp}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/forgot-password' component={ForgotPassword}/>
                </Switch>
            {/*</AuthProvider>*/}
        </BrowserRouter>
    </>
  );
}

export default App;
