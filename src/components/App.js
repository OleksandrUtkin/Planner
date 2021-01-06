import React from 'react';
import SignUp from "./SignUp";
import {AuthProvider} from "../context/AuthContext";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from "./Dashboard";
import Login from './Login';
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <>
        <BrowserRouter>
            <AuthProvider>
                <Switch>
                    <PrivateRoute exact path='/' component={Dashboard}/>
                    <Route path='/signUp' component={SignUp}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    </>
  );
}

export default App;
